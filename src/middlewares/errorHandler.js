export function errorHandler(error, request, response, next) {
  console.error(error);

  if (error.name === 'ZodError') {
    return response.status(400).json({
      error: 'Dados inválidos',
      details: error.errors
    });
  }

  return response.status(500).json({
    error: 'Erro interno do servidor'
  });
}