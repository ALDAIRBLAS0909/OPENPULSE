# OpenPulse

**Small tools. Better workflows.**

OpenPulse is an independent, open-source collection of lightweight developer utilities that run locally in your browser. The first release includes tools for formatting JSON, converting Base64, encoding URL components, and inspecting text.

## Project goals

- Make common developer tasks quick and accessible.
- Keep user-provided content in the browser; the tools do not upload it to a server.
- Prefer simple, dependency-free web technologies.
- Welcome useful, well-tested contributions from the community.

## Available tools

| Tool | What it does |
| --- | --- |
| JSON formatter | Parses JSON, reports invalid input, and formats or minifies valid JSON. |
| Base64 converter | Encodes UTF-8 text and decodes Base64. |
| URL encoder | Encodes and decodes URL components. |
| Text inspector | Counts characters, words, and lines. |

## Run locally

No build step or package installation is required.

1. Clone this repository.
2. Open `index.html` in a modern browser.

For a local development server, you can run:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Project structure

```text
.
├── index.html
├── styles.css
├── app.js
├── README.md
├── CONTRIBUTING.md
└── LICENSE
```

## Privacy

The current utilities process input in the browser using built-in JavaScript APIs. OpenPulse does not currently require an account, send input to a backend, or store input remotely. Avoid entering secrets into any website unless you have independently reviewed and trust its code and hosting environment.

## Roadmap

The roadmap is a proposal, not a claim that these features are already implemented:

- Add automated tests for utility functions.
- Improve accessibility and keyboard navigation.
- Add carefully reviewed tools requested through GitHub Issues.
- Add translations and usage documentation.
- Establish a transparent contribution and release process.

## Contributing

Bug reports, accessibility improvements, documentation fixes, and focused feature proposals are welcome. Read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request.

## License

Released under the [MIT License](LICENSE).

---

OpenPulse is an independent community project. It is not affiliated with or endorsed by Anthropic, GitHub, or any other company.
