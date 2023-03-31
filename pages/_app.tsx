import '@/styles/globals.css'
type AppProps={Component:any,pageProps:any}
function App({Component,pageProps}:AppProps){
return <Component {...pageProps}/>
}
export default App