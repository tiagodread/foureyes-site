async function Cep(request, response) {
  const postalCode = request.query.code
  console.log(postalCode)
  const viaCepResponse = await fetch(`https://viacep.com.br/ws/${postalCode}/json/`)
  const postalCodeData = await viaCepResponse.json()

  response.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate')
  response.json(postalCodeData)
}

export default Cep