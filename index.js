const { Client, GatewayIntentBits } = require('discord.js');

// إعداد البوت مع الصلاحيات الأساسية
const client = new Client({ 
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] 
});

// هذا السطر يشتغل عندما يفتح البوت
client.once('ready', () => {
    console.log(`تم تسجيل الدخول بنجاح باسم: ${client.user.tag}`);
});

// مثال بسيط: البوت يرد بكلمة "هلا" إذا كتبت "سلام"
client.on('messageCreate', (message) => {
    if (message.content === 'سلام') {
        message.reply('وعليكم السلام ورحمة الله!');
    }
});

// ضع التوكن الخاص بك هنا مكان "YOUR_TOKEN_HERE"
client.login('YOUR_TOKEN_HERE');
