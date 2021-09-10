
const { Post } = require('../models');

const postdata = [
    {
        title:"ttitle thing",
        content:"stuff",
        user_id:2,
    },
    {
        title:"muahahaa",
        content:"idek",
        user_id:4,
    },
    {
        title:"*snickers*",
        content:"mufasssaaa",
        user_id:4,
    },
    {
        title:"Is mayonnaise an instrument?",
        content:"https://www.youtube.com/watch?v=A5jnftBQw2U",
        user_id:4,
    },
    {
        title:"you know what's funnier than 24?",
        content:"25",
        user_id:6,
    },
    {
        title:"Thomas Jefferson",
        content:"the only thing to fear is fear itself. And spiders",
        user_id:6,
    },
    {
        title:"definitely not a shark",
        content:"the water is really nice. you should come in",
        user_id:7,
    },
    {
        title:"red robin",
        content:"Yummmmmmmm",
        user_id:7,
    },
    {
        title:"penguins are cool",
        content:"nothing.they're just cool.",
        user_id:8,
    },
    {
        title:"derpo",
        content:"idek anymore",
        user_id:9,
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;