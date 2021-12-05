// 
        // 
        // Main code
        // 
        // 
        const {html} = await import("https://cdn.skypack.dev/@!!!!!/elemental@0.0.7")
        const Container = (await import("https://cdn.skypack.dev/-/@!vanilla/container@v1.0.0-bGpbHkspZ6O4lL0CywGx/dist=es2019,mode=imports/optimized/@!vanilla/container.js")).default
        
        document.body = xml`
            <body>
                <${Container} verticalAlignment="center" horizontalAlignment="center" width="50rem" height="50rem" backgroundColor="lightcoral">
                    Howdy!
                </>
            </body>
        `
        
        
        async function Card({ style, children, ...props }) {
            
            return html`
                <span>
                    <${Container} style=${style}>
                        Do you even Async?
                    </>
                </span>

                
            `
        }