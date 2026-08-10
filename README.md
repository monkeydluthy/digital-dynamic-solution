# Digital Dynamic Solution

Marketing site for **Digital Dynamic Solution** — a Tampa Bay agency focused on social media, web design & SEO, and custom app development for local businesses and home-service contractors.

**Live site:** [digitaldynamicsolution.com](https://digitaldynamicsolution.com)

---

## What this repo is

A React single-page app for the company website, including:

- Core service pages (Social Media, Web Design & SEO, Custom App Development)
- Portfolio + case studies
- Product pages for **Nexus** and **NightSync**
- Contact form (delivers to `luthdigitalconsult@gmail.com`)

Brand guidance lives in [`docs/DDS_Brand_Kit_Build_Spec.md`](docs/DDS_Brand_Kit_Build_Spec.md).

---

## Stack

| Layer | Tools |
| --- | --- |
| UI | React 18, React Router |
| Styling | Tailwind CSS, Poppins |
| Motion | Framer Motion |
| Build | Create React App (`react-scripts`) |
| Hosting | Netlify (deploys from `main`) |

---

## Getting started

```bash
npm install
npm start
```

App runs at [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build → build/
npm test        # test runner
```

---

## Project structure

```
src/
  components/   # Header, Footer, shared UI
  pages/        # Routes (Home, Services, Portfolio, Nexus, NightSync, …)
  assets/       # Brand images, portfolio logos, product screenshots
public/         # Static assets + index.html
docs/           # Brand kit / build notes
build/          # Production output
```

---

## Contact

- **Phone / text:** 813.997.0321
- **Email:** luthdigitalconsult@gmail.com
- **Location:** Tampa, Florida

---

## License

Private business site. All rights reserved.
