import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class ExtendedDocument extends Document {
  public static async getInitialProps(ctx): Promise<{
    styles: JSX.Element
    html: string
    head?: JSX.Element[]
  }> {
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () => originalRenderPage()

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: <>{initialProps.styles}</>
      }
    } finally {
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
