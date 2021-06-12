const MongoLib = require('../lib/mongo');

class ApiKeyService {
  constructor() {
    this.collection = 'api-keys';
    this.mongoDB = new MongoLib();
  }

  async getApiKey({ token }) {
    const [ApiKey] = await this.mongoDB.getAll(this.collection, { token });
    return ApiKey;
  }
}

module.exports = ApiKeyService;
