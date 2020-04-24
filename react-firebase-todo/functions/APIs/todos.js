exports.getAllTodos = (request, response) => {
  todos = [
    {
      'id': '1',
      'title': 'Hello world',
      'body': 'How yo doin?'
    },
    {
      'id': '2',
      'title': 'Loving',
      'body': 'You mean so much to me'
    }
  ]
  return response.json(todos);
}