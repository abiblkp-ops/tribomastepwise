require('dotenv').config();
const OpenAI = require('openai');

// Mengambil API key secara aman dari environment variable
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function main() {
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini", // atau model yang kamu gunakan
    messages: [
      { role: "system", content: "Kamu adalah mentor Sokratik yang memandu siswa langkah demi langkah, dilarang memberikan jawaban akhir secara instan." },
      { role: "user", content: "Tolong bantu jelaskan soal ini..." }
    ],
  });

  console.log(completion.choices[0].message.content);
}

main();
