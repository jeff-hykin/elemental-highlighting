{ // Should highlight xml
    const a = xml`<a>`;
    xml`<a>`;
    a.xml`<a>`;
    a.a.xml`<a>`;
    owl.xml/*html*/`<a>`;
    owl.xml/* html */`<a t-attf-class="link {{index==1? 'second':'other'}} ">`;
    const render = () => xml`
        <ul>
            ${repeat(items, (i) => i.id, (i, index) => xml`
            <li>${index}: ${i.name}</li>`)}
        </ul>
    `; ƒ

    const appTemplate = xml/*html*/`
    <div class="app">
      <Wizard t-ref="wz" activeIndex="state.activeIndex"/>
      <div class="menubar">
        <!--
        <button t-on-click="addWindow('Hello')">Say Hello</button>
        <button t-on-click="addWindow('Counter')">Counter</button>
        -->
        <span t-esc="state.activeIndex"/>
        <button t-on-click="next()" class="right">Next &gt;</button>
        <button t-on-click="prev()" class="right">&lt; Prev</button>
      </div>
    </div>`;

}

{ // Should not highlight xml
    const a = axml`<a>`;
    const b = Xml`<a>`;
    const c = xml.a`<a>`;
    const d = 'xml`<a>`';
    const e = ' xml`<a>` '
    const f = " xml`<a>` "
    owl.xml/*xml*/`<a>`;
    owl.xml/* xml */`<a>`;
    owl.xml/* not-html */`<a>`;
    // xml`<a>`
    /* xml`<a>` */
}


{ // Should highlight css
    const a = css`body{ padding: 0; }`;
    css`body{ padding: 0; }`;
    a.css`body{ padding: 0; }`;
    a.a.css`body{ padding: 0; }`;
    const render = () => css`
        .my-component {
            display: block;
            color: blue;
            .sub-component h {
                color: ${theme.MAIN_COLOR};
                .my-component {
                    display: block;
                    .sub-component h {
                        color: red;
                    }
                }
            }
        }`;

    owl.foo.bar.css`body{ padding: 0; }`;
    owl.css`body{ padding: 0; }`;
    css/*scss*/`body{ padding: 0; }`;
    css/*less*/`body{ padding: 0; }`;
    css/*scss*/`body{ padding: 0; }`;
    css/* css */`body{ padding: 0; }`;
    css/* scss */`body{ padding: 0; }`;
    css/* less */`body{ padding: 0; }`;
    css`
        /* css comment is here */
        body{ color: red; }`;
}

{ // Should not highlight css
    const a = acss`body{ padding: 0; }`;
    const b = Css`body{ padding: 0; }`;
    const c = css.a`body{ padding: 0; }`;
    const d = 'css`body{ padding: 0; }`';
    const e = ' css`body{ padding: 0; }` '
    const f = " css`body{ padding: 0; }` "
    const g = css
        `body{ padding: 0; }`;
    css /*css*/ `body{ padding: 0; }`;
    css /*css*/`body{ padding: 0; }`;
    css/*css*/ `body{ padding: 0; }`;
    css/*ascss*/`body{ padding: 0; }`;
    css/* non-css */`body{ padding: 0; }`;
    owl_css`body{ padding: 0; }`;
    scss`body{ padding: 0; }`;
    less`body{ padding: 0; }`;

    // css`body{ padding: 0; }`
    /* css`body{ padding: 0; }` */
}
