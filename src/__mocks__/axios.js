module.exports = {
  get: jest.fn(url => {
    if (url === 'https://ui-course-server.now.sh/vyuskiv/posts') {
      return Promise.resolve({
        data: [{ id: 1, name: 'test name' }]
      })
    }
  })
}
