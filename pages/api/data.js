// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler (req, res) {
  const data = [
    {
      title: 'hello',
      description: 'world'
    },
    {
      title: 'foo',
      description: 'bar'
    },
    {
      title: 'dude',
      description: 'stoked'
    }

  ]
  res.status(200).json(data)
}
