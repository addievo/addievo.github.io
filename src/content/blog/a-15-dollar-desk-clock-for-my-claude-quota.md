---
title: "A $15 desk clock for my Claude quota"
description: "I kept typing /usage and forgetting the answer, so I reflashed a cheap WiFi clock to show it permanently. Notes on the device, the auth, and the parts that fought back."
date: 2026-08-21
tags: ["hardware", "claude-code", "esp8266"]
draft: true
---

<!-- draft: flip draft: false in the frontmatter to publish -->

I kept typing `/usage`.

That is the whole origin story. Claude Code will tell you where you sit against the five hour session window and the seven day week, but only if you stop what you are doing and ask. I would ask, forget, then discover I was near the ceiling in the middle of something I did not want to pause. The information existed. It just was not in front of me.

So I put it on a clock.

## The device

The clock is a GeekMagic SmallTV-Ultra, the ESP8266 model, about fifteen dollars on AliExpress. It is a 240 by 240 ST7789V panel in a little CRT-shaped case, sold as a desk toy that shows the time and the weather. Its stock firmware exposes a plain `ESP8266HTTPUpdateServer` at `/update`, which is how the vendor ships updates and also, conveniently, how anyone else can.

That makes the reflash one command:

```bash
curl -F "firmware=@claudetv-v4.7-generic.bin" http://<device-ip>/update
```

No soldering, no case opening, no serial adapter. It is fully reversible too. The stock image goes back on the same way.

On first boot it raises a `ClaudeTV-Setup` hotspot. You join it, choose your WiFi, and paste in one URL. After that it lives at `claudetv.local`.

## The half that is not on the clock

An ESP8266 cannot hold Claude credentials, and I would not want it to. So there is a second piece: a small Python collector running on an always-on Linux box on the same network. It authenticates once with a Claude subscription login, polls the same `api/oauth/usage` endpoint that `/usage` reads, and serves a small JSON blob on port 8088. The clock polls that, over the LAN, and never sees a token.

What lands on the screen is three numbers: S for the five hour session, W for the seven day week, and F for the model-scoped weekly limit, coloured green, amber or red by level, with reset times underneath. Then it rotates through weather (now, feels like, high, low, rain chance, humidity, keyless from open-meteo) and back to a clock that dims itself overnight.

There are optional alerts as well: email, Discord and Slack, fired the moment a usage window rolls over to fresh quota. That reset is otherwise something you find out by checking.

## What fought back

Three things cost me real time.

Authentication was the first. Two credentials look like they should work and do not. An API key is the wrong kind of account entirely, because the usage endpoint reports *subscription* limits. And `claude setup-token` mints a token scoped for Claude Code inference, which the usage endpoint answers with a 403. It has to be a genuine subscription login.

Keeping that login is its own problem. The access token lives about eight hours. The refresh token carries a validity window that gets re-granted every time you refresh it. So the collector speaks the OAuth refresh grant natively and rotates the pair every few hours, which means one login keeps rolling instead of ageing out on me every month.

The last one was noise, the audible kind. Redrawing over SPI made the board tick faintly on every update, which is unbearable at a desk. Holding a single SPI transaction open, keeping CS low the way the stock firmware does, made it silent.

There is also a browser emulator in the repo that draws the 240 by 240 layout using the device's real font advance tables, so string widths match the hardware exactly. I built it after the fourth reflash to nudge a label two pixels left.

Code, firmware and installer: [latticelabs-au/ClaudeTV](https://github.com/latticelabs-au/ClaudeTV). MIT.
