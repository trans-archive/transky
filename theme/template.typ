#set text(
  lang: "zh",
  font: (
    "Source Han Serif SC",
  ),
)

#show heading.where(level: 1): set align(center)

#show heading.where(level: 2): set align(center)

#show link: underline

#show raw.where(block: true): block.with(
  width: 100%,
  fill: luma(240),
  inset: 10pt,
  radius: 4pt,
)

#show quote.where(block: true): block.with(
  width: 100%,
  fill: rgb("#f1f6f9"),
  inset: 10pt,
  radius: 4pt,
)

#set page(
  header: locate(loc => {
    if counter(page).at(loc).first() > 1 [
      MDBOOK_TYPST_PDF_TITLE
    ]
  }),
  footer: locate(loc => {
    if counter(page).at(loc).first() > 1 [
      #counter(page).display(
        "1/1",
        both: true,
      )
    ]
  }),
)

#page(background: image("illustrations/cover.jpg"), [])

#pagebreak()
#outline(depth: 2, indent: 1em)
#pagebreak()

#set par(first-line-indent: 2em)

#show heading: it => {
  it
  h(2em)
}

/**** MDBOOK_TYPST_PDF_PLACEHOLDER ****/
