// import React from "react";
// import '../App.css';

// type Book = {
//   id: number;
//   title: string;
//   author: string;
//   price: string;
// };

// const Books: React.FC = () => {
//   const books: Book[] = [
//     { id: 1, title: "Introduction to Algorithms", author: "Thomas H. Cormen", price: "$50" },
//     { id: 2, title: "The Art of Computer Programming", author: "Donald Knuth", price: "$60" },
//     { id: 3, title: "Clean Code", author: "Robert C. Martin", price: "$40" },
//     { id: 4, title: "Design Patterns", author: "Erich Gamma", price: "$45" },
//     { id: 5, title: "The Pragmatic Programmer", author: "Andrew Hunt", price: "$55" },
//     { id: 6, title: "Refactoring", author: "Martin Fowler", price: "$50" },
//   ];

//   return (
//     <div className="p-8">
//       <h1 className="text-2xl font-bold">Books Marketplace</h1>
//       <p>Browse and list used academic books here.</p>
//       {/* Grid Container for Responsive Design */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {books.map((book) => (
//           <div key={book.id} className="border rounded-lg shadow p-4 flex flex-col">
//             <h2 className="text-xl font-bold">{book.title}</h2>
//             <p className="text-gray-600">Author: {book.author}</p>
//             <p className="text-green-500 font-bold">Price: {book.price}</p>
//             <button className="mt-2 bg-primary text-white py-2 px-4 rounded hover:bg-dark">
//               Buy Now
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Books;


import React ,{useState , useEffect} from 'react';
import axios from 'axios';
import '../App.css';
import Card from './Card';


export default function  () {

  const [search,setSearch]=useState("");

  type Book = {
    volumeInfo: {
        title: string;
        imageLinks?: { smallThumbnail?: string };
        authors?: string[];
        publisher?: string;
        publishedDate?: string;
        description?: string;
        previewLink?: string;
    };
    saleInfo: {
        listPrice?: { amount?: number };
    };
};

      const [bookData,setData]=useState<Book[]>([]);

      // Temporary static data for testing
    const tempBooks = [
      {
          volumeInfo: {
              title: "Introduction to Algorithms",
              imageLinks: { 
                smallThumbnail: "./book1.jpg"
               },
              authors: ["Thomas H. Cormen"],
              publisher: "MIT Press",
              publishedDate: "2009",
              description: "A comprehensive book on algorithms.",
              previewLink: "#",
          },
          saleInfo: { listPrice: { amount: 950 } },
      },
      {
          volumeInfo: {
              title: "Clean Code",
              imageLinks: { 
                smallThumbnail: "./book2.jpg"
               },
              authors: ["Robert C. Martin"],
              publisher: "Prentice Hall",
              publishedDate: "2008",
              description: "A handbook of agile software craftsmanship.",
              previewLink: "#",
          },
          saleInfo: { listPrice: { amount: 640 } },
      },
      {
        volumeInfo: {
            title: "Operating System Concepts",
            imageLinks: { 
                smallThumbnail: "./book3.jpeg" 
            },
            authors: ["Abraham Silberschatz", "Peter B. Galvin", "Greg Gagne"],
            publisher: "Wiley",
            publishedDate: "2024",
            description: "An essential book for understanding operating systems and their functionalities.",
            previewLink: "#",
        },
        saleInfo: { listPrice: { amount: 880 } }, 
    },
    {
      volumeInfo: {
          title: "Computer Networks",
          imageLinks: { 
              smallThumbnail: "./book4.jpg" 
          },
          authors: ["Andrew S. Tanenbaum", "David J. Wetherall"],
          publisher: "Pearson",
          publishedDate: "2024",
          description: "A detailed exploration of computer networking concepts and protocols.",
          previewLink: "#",
      },
      saleInfo: { listPrice: { amount: 790 } }, 
  },

  {
    volumeInfo: {
        title: "Digital Design and Computer Architecture",
        imageLinks: { 
            smallThumbnail: "./book5.jpg" 
        },
        authors: ["David Harris", "Sarah Harris"],
        publisher: "Morgan Kaufmann",
        publishedDate: "2024",
        description: "A practical guide to digital design and computer architecture.",
        previewLink: "#",
    },
    saleInfo: { listPrice: { amount: 950 } }, 
},

{
  volumeInfo: {
      title: "Artificial Intelligence: A Modern Approach",
      imageLinks: { 
          smallThumbnail: "./book6.jpeg" 
      },
      authors: ["Stuart Russell", "Peter Norvig"],
      publisher: "Pearson",
      publishedDate: "2024",
      description: "A comprehensive introduction to artificial intelligence and its applications.",
      previewLink: "#",
  },
  saleInfo: { listPrice: { amount: 820 } }, 
},

{
  volumeInfo: {
      title: "Database System Concepts",
      imageLinks: { 
          smallThumbnail: "./book7.jpg" 
      },
      authors: ["Abraham Silberschatz", "Henry F. Korth", "S. Sudarshan"],
      publisher: "McGraw Hill",
      publishedDate: "2024",
      description: "An authoritative text for understanding database systems and their design.",
      previewLink: "#",
  },
  saleInfo: { listPrice: { amount: 550 } }, 
},

{
  volumeInfo: {
      title: "Machine Learning: A Probabilistic Perspective",
      imageLinks: { 
          smallThumbnail: "./book8.jpg"
      },
      authors: ["Kevin P. Murphy"],
      publisher: "MIT Press",
      publishedDate: "2012",
      description: "A comprehensive introduction to machine learning, covering probabilistic models and methods.",
      previewLink: "#"
  },
  saleInfo: {
      listPrice: { 
          amount: 750.00 
      }
  }
}


  ];

      // Automatically load static data on page load
    useEffect(() => {
      setData(tempBooks); // Load static books when the page is loaded
  }, []);


      // const searchBook=(evt: React.KeyboardEvent)=>{
          
      //     if(evt.key==="Enter")
      //     {
      //       //  // Use static data temporarily
      //       setData(tempBooks); // Override API call with static data
            
            

      //       // Keep API logic commented for future use
          
      //       axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU' + '&maxResults=40')
      //           .then(res => setData(res.data.items))
      //           .catch(err => console.log(err));


            
      //     } 
          
      //     }

    //   const searchBook = async (evt: React.KeyboardEvent) => {
    //     if (evt.key === "Enter") {
    //         try {
    //             const apiResponse = await axios.get(
    //                 `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU&maxResults=40`
    //             );
    //             const apiBooks = apiResponse.data.items || []; // Handle empty API result

    //             const filteredTempBooks = tempBooks.filter((book: Book) =>
    //                 book.volumeInfo.title.toLowerCase().includes(search.toLowerCase())
    //             );

    //             const filteredApiBooks = apiBooks.filter((book: any) =>
    //                 book.volumeInfo?.title?.toLowerCase().includes(search.toLowerCase())
    //             );
    //             const combinedBooks = [...filteredTempBooks, ...filteredApiBooks]; // Combine results

    //             setData(combinedBooks); // Update state
    //         } catch (error) {
    //             console.error("Error fetching books from API:", error);
    //         }
    //     }
    // };

    const searchBook = (evt: React.KeyboardEvent) => {
      if (evt.key === "Enter") {
          try {
              // Filter temporary books based on the search query
              const filteredTempBooks = tempBooks.filter((book: Book) =>
                  book.volumeInfo.title.toLowerCase().includes(search.toLowerCase())
              );
  
              // Update the state with filtered temporary books
              setData(filteredTempBooks);
          } catch (error) {
              console.error("Error filtering books:", error);
          }
      }
  };
  

  return (
    
    <>
      <div className="">
        <div className="bookrow1">
          <h2>Find Your Book</h2>
          <div className="search">
              <input 
              type="text" 
              placeholder='Enter Your Book Name' 
              value={search} 
              onChange={(e)=>setSearch(e.target.value)}
              onKeyDown={searchBook}/>
              <button><i className="fa-solid fa-magnifying-glass"></i></button>  
          </div>
        </div>

        <div className="container">
          {
            <Card book={bookData}/>
          }

        </div>
    
      </div>
    </>
  )
}










