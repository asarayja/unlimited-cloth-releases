# Third-party notices

Unlimited Cloth (MIT, Copyright (c) 2026 Unlimited Reforge, see `LICENSE`) contains the following
work by others.

## asarayja-nui-tools (`lib/rage/`, and the packed peds in `assets/peds/`)

`lib/rage/` (the GTA V file readers and writers, the clothing and tattoo builders, the fix jobs and
the pose code) is copied from asarayja-nui-tools at commit
`52bba5ed8158686cd3486c4d71da11bf09e19b08`, with the small changes listed in `README.md`. The
packed ped files in `assets/peds/` were made with the same project's tools. That project is
declared MIT by its author ("license": "MIT", author "asarayja" in its package.json). asarayja-nui-tools is the
same author's own tool; the notice is kept as the licence asks:

```
MIT License

Copyright (c) asarayja

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## Freemode peds (`assets/peds/`)

`assets/peds/bodies/{male,female}.body` (+ `.skel.json`), `assets/peds/skin/` and
`assets/peds/zones/` are **derived from Rockstar Games' GTA V freemode peds**
(`mp_m_freemode_01` / `mp_f_freemode_01`), exported with Sollumz and packed into a small preview
format. They ship with the program only so the 3D preview, the animations and the fit tools work
without the game files. Grand Theft Auto V and its assets are the property of Rockstar Games /
Take-Two Interactive; the MIT licence above does not cover them, and Unlimited Reforge is not
affiliated with Rockstar Games. Users can replace them with files from their own game (Peds tab).

## three.js 0.186.0 (`public/vendor/three/`)

```
The MIT License

Copyright © 2010-2026 three.js authors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```

## fzstd (`node_modules/fzstd`, reads zstd-compressed .blend files)

```
MIT License

Copyright (c) 2020 Arjun Barrett

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.```

## Electron

The installers contain Electron (MIT, Copyright (c) Electron contributors / GitHub Inc.) and
Chromium, whose own licence files are shipped beside the program (`LICENSE.electron.txt`,
`LICENSES.chromium.html`).
