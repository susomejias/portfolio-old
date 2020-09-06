import ApiClient from './ApiClient'

class DevtoService {
  public static async getDevtoPosts() {
    const url =
      'https://dev.to/api/articles?username=susomejias&state=all&per_page=1000'

    const posts = await ApiClient.get(url)

    return posts
  }
}

export default DevtoService
