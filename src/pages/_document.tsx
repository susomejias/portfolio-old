import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

// https://github.com/zeit/next.js/tree/canary/examples/with-styled-components
class ExtendedDocument extends Document {
  public static async getInitialProps(
    ctx
  ): Promise<{
    styles: JSX.Element
    html: string
    head?: JSX.Element[]
  }> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render(): JSX.Element {
    const {
      __NEXT_DATA__: {
        query: { __lng = 'es' }
      }
    } = this.props

    return (
      <Html lang={__lng as string}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default ExtendedDocument
