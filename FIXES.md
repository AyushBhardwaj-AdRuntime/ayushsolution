# Repair status

## Fixed

| Area | Defect | Resolution |
| --- | --- | --- |
| Contact | The home/connect form called Web3Forms with a browser-exposed key and a URL blocked by the site's CSP. | Both live forms now post the API's expected fields to the same-origin `/api/contact` route. Existing loading, success, error, and email fallback behavior remains. |
| Contact API | Recipient and missing mail configuration were unclear. | The recipient uses `CONTACT_RECIPIENT` (with the existing inbox as a fallback), and missing Gmail credentials return a clear configuration error. |
| Codeforces | The incomplete integration queried an empty handle and showed misleading fallback statistics. | The Codeforces UI, hook, API route, CSP access, and configuration were removed at the portfolio owner's request. |
| Project details | Custom projects were incorrectly fetched as GitHub repositories. | Custom slugs now render their own problem, solution, impact, stack, preview, and outcome data. |
| MockHire | The project linked to the generic GitHub homepage. | It now links to `https://www.mockhire.me/`. |
| Articles | Placeholder “Coming soon” posts were public and linked from the site. | Posts have an explicit publication state; listing, Insights, article lookup, and related links use published posts only. |
| Insights | Cards contained hardcoded mock content and were not links. | Cards now use published article data and navigate to their article routes. |
| Footer | A temporary remote video and fake newsletter success alert misled visitors. | The footer uses its stable static background and clearly marks newsletter updates as inactive. |
| Navigation/SEO | Engage was absent from navigation and the 404 page had no route metadata. | Engage is available in desktop/mobile navigation and 404 metadata is set. |
| GitHub data | The GraphQL endpoint returned a hard 500 without a token, project images were duplicated, and StrictMode could fetch twice. | Missing-token requests return a safe empty payload, image IDs have one shared source, and the project hook has a fetch guard. |
| Maintenance | Duplicate and orphaned components/data remained from an incomplete refactor. | Unreferenced duplicates, CTA, Timeline, and legacy systems data were removed. |

## Manual setup and known gaps

- Contact delivery does not work until `EMAIL_USER`, `EMAIL_PASS`, and `CONTACT_RECIPIENT` are set in Vercel and the project is redeployed. `EMAIL_PASS` must be a Gmail App Password.
- The contact endpoint has validation and a payload cap, but no spam protection or rate limiting.
- `PINNED_REPOS` is still empty; manual project pinning remains unfinished.
- Three draft posts remain intentionally unpublished: “From Hacktoberfest to GSoC in First Year,” “What PR Reviews Taught Me About Software Engineering,” and “Why Working Code Isn’t Enough.”
- Newsletter subscriptions are intentionally inactive because no newsletter backend exists.
