import React, { useState } from 'react'
import '../css/content.css'

function Content() {
    const [name] = useState(localStorage.getItem("name"));
    const [surname] = useState(localStorage.getItem("surname"));

    return (      
        <div className='bg'>
            <div className="middle">
              <h1>{` Hoş geldin ${name} ${surname}`}</h1>
              <h2>{`Yukardan bir kurs seç ve hemen öğrenmeye başlayalım`}</h2>
              <hr />
              <p>-VisualDataStructureCourse-</p>
            </div>
        </div>
    )
}

function Stack(){
    return (
        <div>Stack</div>
    )
}

function LinkedList(){
    return (
        <div>LinkedList</div>
    )
}

function Tree(){
    return (
        <div>Tree</div>
    )
}

function Render(){
    return (
        <div className="sidebar">

            <ul className="sidelist">
                <h1 className="align-center">Linked List</h1>
                <li>Stack</li>
                <li>Queue</li>
                <li>Linked List</li>
                <li>Tree</li>
                <li>Graph</li>
                <li>Stack</li>
                <li>Queue</li>
                <li>Linked List</li>
                <li>Tree</li>
                <li>Graph</li>
                <li>Queue</li>
                <li>Linked List</li>
                <li>Tree</li>
                <li>Graph</li>
            </ul>
            <div className="content">
                <h2>Linked List Nedir?</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia consequatur aut, quas officiis vitae et
                    laborum sunt pariatur natus asperiores corporis porro labore ipsum. Fugiat porro quam ipsa ad, corporis vero
                    beatae debitis explicabo blanditiis illo dolorem distinctio, veritatis possimus aliquid! Officiis doloremque
                    totam rem impedit fugiat aliquam! Voluptate excepturi, illo tenetur illum cumque ab quis inventore nihil non
                    perferendis cum laboriosam, veniam soluta saepe fugit enim ea. Tempora error, id ipsum placeat inventore
                    quae earum totam nulla nihil, repudiandae vel qui. Atque ea beatae veritatis assumenda id. Numquam sit nulla
                    officiis dignissimos. Harum amet corporis quis odio, laborum quidem illum iusto temporibus excepturi
                    molestiae modi incidunt nostrum illo necessitatibus, saepe cum delectus voluptatum vitae sequi vel quo enim
                    error asperiores. Quia commodi nobis soluta esse atque architecto distinctio! Reprehenderit delectus
                    assumenda voluptates? Nemo, beatae. Mollitia sunt asperiores expedita aspernatur aut maxime. Ea id voluptate
                    magnam nesciunt perferendis labore iste facilis ex eaque vero? Eos, necessitatibus nisi? Vitae sunt laborum,
                    ad veritatis obcaecati incidunt dolores. Officiis accusamus earum labore soluta obcaecati. Autem excepturi
                    sunt ipsam repudiandae rerum totam obcaecati porro? Ut dolore odio delectus excepturi soluta, veniam fugiat
                    officiis doloribus molestiae explicabo beatae voluptates ducimus. Reprehenderit autem nam ipsa amet
                    laboriosam tenetur sapiente quas odit perspiciatis, delectus quaerat quod! Minima odit aliquam mollitia
                    nostrum iste nam, eum atque nihil cum id. Exercitationem quis numquam magni aliquam. Quas eum beatae
                    corrupti autem sapiente eius exercitationem aspernatur, voluptatem cum error, quidem labore tempora veniam
                    dolor nesciunt quos quod magnam fugiat consectetur perspiciatis sed eligendi harum quasi! Molestias adipisci
                    cupiditate sed sit ratione? Beatae consequuntur rem fugit ipsam minus maxime aliquam eligendi nam culpa
                    earum similique quo dolore error atque molestias sunt, vitae iste! Natus maiores veritatis molestiae vero
                    nihil dolor labore perferendis inventore libero ipsam quas voluptatum nesciunt ea quam nulla laboriosam
                    repellat, temporibus voluptate sunt odio. Assumenda itaque dolor nam non quasi necessitatibus corporis
                    excepturi aliquid, vero cumque quia ipsum ut maiores nesciunt unde veritatis repudiandae. Voluptatum quam
                    ratione non nihil possimus placeat ab ad veniam? Ipsum cupiditate libero ea quas blanditiis illum sed
                    possimus! Ratione, itaque laudantium sunt voluptatum, animi optio nam cupiditate quas quibusdam blanditiis
                    quia facere! Distinctio reprehenderit, eius similique obcaecati inventore deleniti, voluptates saepe earum
                    aperiam impedit consectetur possimus, doloribus adipisci unde eum. Error harum minima ipsam blanditiis fugit
                    laudantium at autem molestiae animi voluptate ut quae ad reprehenderit eos iste, saepe mollitia culpa,
                    repellat velit quia dignissimos tempora laboriosam? Impedit, natus vitae quo perferendis suscipit iste
                    obcaecati quisquam reprehenderit molestiae voluptate eum debitis quod id quam optio. Nobis velit repudiandae
                    quam, porro iusto laboriosam omnis nisi quae est nostrum laudantium id provident labore minima eligendi
                    officia culpa sapiente eaque hic ut odit totam sunt! Facilis reprehenderit consequuntur accusamus id esse
                    illum, obcaecati asperiores expedita cupiditate! Tenetur magnam obcaecati eligendi nesciunt nulla sint ipsa
                    hic, voluptatem quam autem quibusdam repudiandae at totam praesentium, voluptas perspiciatis quae
                    voluptatibus provident sequi? Cum commodi voluptatem consequatur, non placeat exercitationem animi dolores
                    consectetur aperiam. Ducimus nulla, officiis dolorem illum maxime corrupti rem consequuntur minus quod
                    expedita, praesentium ipsum ipsa earum fugit esse vel aliquam eaque necessitatibus voluptate beatae
                    obcaecati. Voluptates fugit vero reiciendis, facere voluptate temporibus commodi quam dolore enim animi,
                    quae eius ipsum fuga tenetur eligendi mollitia qui quo voluptatum molestiae, neque cupiditate molestias
                    doloremque ab sunt? Asperiores sint incidunt explicabo fugit dicta at aliquam rem in voluptatibus adipisci
                    accusantium quas, sequi quis? In doloremque aperiam nesciunt facilis quia alias consequuntur nihil obcaecati
                    est corrupti, iure autem magnam, pariatur dicta, atque non ut velit saepe vel perspiciatis quam placeat
                    quae? A dolorum ipsam eveniet, maiores eius culpa porro dicta delectus? Ab harum culpa nihil minus maxime,
                    vitae ex sequi necessitatibus ullam aliquid suscipit officiis officia quasi unde laudantium repudiandae
                    animi atque cum molestiae eum ipsa tenetur dolorem! Provident quis sapiente accusantium dolore ipsa tempora
                    dolores sint culpa magnam ipsam, nostrum magni voluptates, ad atque officiis nemo laboriosam reiciendis
                    similique repellendus itaque doloribus, deserunt libero corrupti. Ipsam officia corporis magnam officiis
                    sapiente? Eos sequi sit tenetur veniam consectetur consequuntur iste repudiandae ipsum magni dolorem? At
                    doloremque perferendis minus quod fugit! Velit ab reiciendis alias porro! Totam consectetur earum asperiores
                    magni nemo inventore necessitatibus aut eaque quasi, similique perferendis ullam accusantium corrupti
                    explicabo beatae et quod dolores rerum illum. Doloremque mollitia ex rerum aliquid. Nulla unde officiis nisi
                    dolorum! Et ipsa accusamus veniam dolore autem nam, praesentium possimus quasi quia fuga perferendis? Alias
                    mollitia quasi dignissimos? Recusandae veniam magnam sapiente voluptas earum, hic quae maiores excepturi
                    architecto laborum provident fugiat corrupti nobis deleniti dolores cumque corporis libero illum repellat
                    neque! Aliquid rem harum fugit tenetur fugiat et corporis officia soluta rerum, repellat dolores libero
                    sapiente. Necessitatibus reprehenderit fuga eum esse at ipsum exercitationem facere consectetur labore,
                    rerum quo. Illum, ratione reprehenderit tempore temporibus eaque neque quaerat vitae deserunt veniam,
                    voluptas sit. Nulla, commodi mollitia nemo ducimus quam alias tempora numquam aspernatur similique qui rem
                    officia pariatur sint? Ipsum numquam dolorem incidunt temporibus earum facilis eveniet facere laboriosam
                    accusantium laudantium accusamus perferendis aliquam saepe sequi maxime, laborum voluptatum? Eaque obcaecati
                    vel, harum, nihil non incidunt nisi laudantium amet soluta nulla sapiente suscipit totam sequi dolore vitae
                    tempore nesciunt! Consequatur, repellendus itaque incidunt mollitia, dignissimos laboriosam dolor quidem
                    nostrum in totam molestias expedita, obcaecati error ipsam ea ex fugit dolores architecto est hic placeat!
                    Assumenda, eligendi, commodi dolorem totam nemo quibusdam officia nulla autem necessitatibus optio nihil
                    excepturi architecto voluptate repellendus magnam id ad sed perferendis qui esse cum. Cupiditate sunt
                    expedita voluptatum nihil ipsa blanditiis error consectetur architecto ea nemo inventore ipsam, id maxime
                    vitae aspernatur tempore explicabo laudantium deleniti perspiciatis quis. Distinctio, assumenda. Doloribus
                    voluptatem aliquid ab autem cupiditate praesentium, est quasi sint. Illo cumque, doloremque delectus minus
                    aliquam fugit perspiciatis pariatur suscipit praesentium, hic alias ipsam? Sit, iusto? Ut, sed aspernatur.
                    Ipsam reiciendis voluptates sint atque vel maiores excepturi quo laudantium quam voluptatibus! Illum in
                    ipsum molestias labore possimus dicta tenetur reiciendis architecto sapiente est nesciunt at quibusdam
                    necessitatibus excepturi ut quas blanditiis repellendus vitae quod, minima assumenda? Reiciendis, alias
                    inventore.
                </p>
                <button><i className="fa fa-play" style={{fontsize:'3rem', transform: 'scaleX(-1)'}}></i></button>
                <button className='rightitem'><i className="fa fa-play" style={{fontsize:'3rem'}}></i></button>
            </div>
        </div>
    )
}

export default function ContentFactory(course){

const returnContent = (content) => {
    switch (content) {
        case "stack":
            return <Stack />

        case "linkedlist":
            return <LinkedList />

        case "tree":
            return <Tree />

        default:
            return <Content />
    }
}

return (returnContent(course))
}