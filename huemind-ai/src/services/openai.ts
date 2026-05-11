import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,

  dangerouslyAllowBrowser: true,
})

export async function generateDesignSystem(
  prompt: string
) {
  const response =
    await openai.chat.completions.create({
      model: 'gpt-4o-mini',

      messages: [
        {
          role: 'system',
          content:
            'You are an AI design system assistant that generates modern UI systems.',
        },

        {
          role: 'user',
          content: prompt,
        },
      ],
    })

  return response.choices[0].message.content
}