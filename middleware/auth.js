export default function (context) {
    console.log('this is middleware')
    context.userAgent = process.server ? context.req.headers['user-agent'] : navigator.userAgent
    console.log(context.userAgent);
}