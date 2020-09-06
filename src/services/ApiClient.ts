class ApiClient {
  public static get(url: string) {
    return this._handleFetch(url, {
      method: 'GET'
    })
  }

  private static async _handleFetch(url: string, options: RequestInit) {
    const response = await fetch(url, {
      ...options,
      headers: {
        ...options.headers
      }
    })

    const { body } = await this._parseBody(response)

    return body
  }

  private static async _parseBody(response: Response) {
    try {
      const body = await response.json()
      return { body, error: null }
    } catch (error) {
      return { body: null, error }
    }
  }
}

export default ApiClient
