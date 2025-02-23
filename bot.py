from aiogram import Bot, Dispatcher, types
from aiogram.types import WebAppInfo, ReplyKeyboardMarkup, KeyboardButton
from aiogram.utils import executor
import config

bot = Bot(token=config.TOKEN)
dp = Dispatcher(bot)

# رابط WebApp للعبة CosmicX
web_app_url = "https://gueroua007.github.io/Cosmic-Quest/"

@dp.message_handler(commands=["start"])
async def start(message: types.Message):
    keyboard = ReplyKeyboardMarkup(resize_keyboard=True).add(
        KeyboardButton("🚀 تشغيل CosmicX", web_app=WebAppInfo(url=web_app_url))
    )

    await message.answer(
        "🎮 مرحبًا بك في **CosmicX**!\nاضغط على الزر أدناه لبدء اللعب مباشرة داخل تيليجرام:",
        reply_markup=keyboard,
        parse_mode="Markdown"
    )

if __name__ == "__main__":
    executor.start_polling(dp, skip_updates=True)