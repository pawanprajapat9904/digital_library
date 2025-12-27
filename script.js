// pdf view
function openBook(pdfUrl) {
  console.log('pdfUrl: ', pdfUrl);

  document.getElementById('book-view').style.display = 'flex';
  document.getElementById('pdf-viewer').src = pdfUrl;
}

function closeBook() {
  document.getElementById('book-view').style.display = 'none';
  document.getElementById('pdf-viewer').src = '';
}

//   dark mode
const toggleButton = document.getElementById('mode-toggle');
const body = document.body;
const libraryshadow = document.getElementById('library');


toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  toggleButton.classList.toggle('dark-mode');
  libraryshadow.classList.toggle('dark-mode');
});

// button audio effect
document.getElementById('mode-toggle').addEventListener('click', function () {
  var clickSound = document.getElementById('clickSound');
  clickSound.play();
});



// Get the toggle button and body
const toggle2Button = document.getElementById('eye-comfort-toggle');

// Add event listener to the button
toggle2Button.addEventListener('click', function () {
  // Toggle the 'yellow-comfort-mode' class on the body
  body.classList.toggle('yellow-comfort-mode');

});

const CourseAvailables = [
  {
    Id: 1,
    BookName: 'Software Development Life Cycle',
    AuthorName: 'Pawan Prajapati',
    BookCover: 'bg.jpg',
    PdfURL: 'book-pdfs/3rdyearsly.pdf'
  },
  {
    Id: 2,
    BookName: 'Software Development Life Cycle',
    AuthorName: 'Pawan Prajapati',
    BookCover: 'bg.jpg',
    PdfURL: 'book-pdfs/3rdyearsly.pdf'
  },
  {
    Id: 3,
    BookName: 'Software Development Life Cycle',
    AuthorName: 'Pawan Prajapati',
    BookCover: 'bg.jpg',
    PdfURL: 'book-pdfs/3rdyearsly.pdf'
  },
  {
    Id: 4,
    BookName: 'Software Development Life Cycle',
    AuthorName: 'Pawan Prajapati',
    BookCover: 'bg.jpg',
    PdfURL: 'book-pdfs/3rdyearsly.pdf'
  },
  {
    Id: 5,
    BookName: 'Software Development Life Cycle',
    AuthorName: 'Pawan Prajapati',
    BookCover: 'bg.jpg',
    PdfURL: 'book-pdfs/3rdyearsly.pdf'
  },
  {
    Id: 6,
    BookName: 'Software Development Life Cycle',
    AuthorName: 'Pawan Prajapati',
    BookCover: 'bg.jpg',
    PdfURL: 'book-pdfs/3rdyearsly.pdf'
  },
  {
    Id: 7,
    BookName: 'Software Development Life Cycle',
    AuthorName: 'Pawan Prajapati',
    BookCover: 'bg.jpg',
    PdfURL: 'book-pdfs/3rdyearsly.pdf'
  },
  {
    Id: 8,
    BookName: 'Software Development Life Cycle',
    AuthorName: 'Pawan Prajapati',
    BookCover: 'bg.jpg',
    PdfURL: 'book-pdfs/3rdyearsly.pdf'
  },
  {
    Id: 9,
    BookName: 'Software Development Life Cycle',
    AuthorName: 'Pawan Prajapati',
    BookCover: 'bg.jpg',
    PdfURL: 'book-pdfs/3rdyearsly.pdf'
  },
  {
    Id: 10,
    BookName: 'Software Development Life Cycle',
    AuthorName: 'Pawan Prajapati',
    BookCover: 'bg.jpg',
    PdfURL: 'book-pdfs/3rdyearsly.pdf'
  },
  {
    Id: 11,
    BookName: 'Software Development Life Cycle',
    AuthorName: 'Pawan Prajapati',
    BookCover: 'bg.jpg',
    PdfURL: 'book-pdfs/3rdyearsly.pdf'
  },
  {
    Id: 12,
    BookName: 'Software Development Life Cycle',
    AuthorName: 'Pawan Prajapati',
    BookCover: 'bg.jpg',
    PdfURL: 'book-pdfs/3rdyearsly.pdf'
  }
]

function LoadCourseDetails(Data) {
  document.getElementById('LibraryAllBooks').innerHTML = '';
  const length = Data.length > 10 ? 10 : Data.length;
  for (let i = 0; i < length; i++) {
    document.getElementById('LibraryAllBooks').innerHTML += `
      <div class="book-cover" id="BookCover">
        <img src="./images/${Data[i].BookCover}" onclick="openBook('${Data[i].PdfURL}')" alt="Icon">
        <h3>${Data[i].BookName}</h3>
        <p>Authoer: ${Data[i].AuthorName} </p>
      </div>
    `;
  }
}
// At Time of Load show All Courses 
LoadCourseDetails(CourseAvailables);


function inputChangeEvent() {
  const SearchValue = document.getElementById('menu-search')?.value?.trim()?.toLowerCase() || '';
  // Show only Filter Course;
  if (SearchValue) {
    const filterData = CourseAvailables.filter((course) => course.BookName.toLowerCase().includes(SearchValue) || course.AuthorName.toLowerCase().includes(SearchValue))
    LoadCourseDetails(filterData);
  } else {
    LoadCourseDetails(CourseAvailables);
  }

}
