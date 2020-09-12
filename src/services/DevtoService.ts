class DevtoService {
  public static async getDevtoPosts() {
    const res = await fetch(
      'https://dev.to/api/articles?username=susomejias&state=all&per_page=1000'
    )
    return await res.json()
  }
}

export default DevtoService
