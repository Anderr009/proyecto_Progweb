import { getBooks } from "@/Utils/Utils"
import CardBook from "@/components/card";
async function About() {
    const books = await getBooks();
    return (
        //display: grid; grid-template-columns: 1fr 1fr;"
        <div className="container " style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', columnGap: '12px', rowGap: '12px' }}>
            {books.data.map((book) => (
                <CardBook key={book.id_titulo} props={book}></CardBook>
            )
            )}
        </div>
    )
}

export default About