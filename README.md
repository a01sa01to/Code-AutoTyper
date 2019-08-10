# Code-AutoTyper

## What's this?

This is a playable tool and you can feel like a hacker!<br>
Why? The Program inputs Code, which already made, even if you input anything, or inputs automatically!

[Play Now!](https://repos.a01sa01to.com/Code-AutoTyper/)

## How to Play

1. Fork this Repository
2. Change or Add Files to show into `Codes` Directory
3. Change `Codes/files.json` like below

  ```files.json:json
  [{
  "file": "FILENAME",
  "ext": "EXTENSION",
  "lang": "LANGUAGE"
  }, ...]
  ```

4. If the error occurs like this: `// Error! Please Add Comment Presets to Comments.json!`, please change `Comments.json`

  ```comments.json:json
  {
  "EXTENSION": ["String Before Comment", "String After Comment"],
  ...
  }
  ```

  For example, Comment on HTML is `<!-- Comment -->`, so input `"html": ["<!--", "-->"],`.

5. Enjoy!<br>
  If other error occurs, [contact me](https://twitter.com/messages/compose?recipient_id=4273512934&ref_src=twsrc%5Etfw)!

## Release

> Version 1.0 Released on 2019.08.11

## Author

[Asa (a.k.a Otsun)（@a01sa01to）](https://twitter.com/a01sa01to)<br>
[Message @a01sa01to](https://twitter.com/messages/compose?recipient_id=4273512934&ref_src=twsrc%5Etfw)

## License

This is under the MIT LICENSE.<br>
See [LICENSE](https://github.com/a01sa01to/Code-AutoTyper/blob/master/LICENSE) file.
