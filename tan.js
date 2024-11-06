// scripts.js

// Sample course data
const courses = [
    { id: 1, title: "Data Science Basics", image: "course1.jpg", price: "$99" },
    { id: 2, title: "Advanced AI", image: "course2.jpg", price: "$199" },
    { id: 3, title: "Python Programming", image: "course3.jpg", price: "$79" }
];

// Sample blog data
const blogs = [
    { id: 1, title: "Why Data Science is the Future", image: "blog1.jpg" },
    { id: 2, title: "AI and the Future of Work", image: "blog2.jpg" },
    { id: 3, title: "How to Start Learning Python", image: "blog3.jpg" }
];

// Render Courses
const courseList = document.querySelector('.course-list');
courses.forEach(course => {
    const courseItem = document.createElement('div');
    courseItem.classList.add('course-item');
    courseItem.innerHTML = `
      <img src="${course.image}" alt="${course.title}">
      <h3>${course.title}</h3>
      <p>${course.price}</p>
      <button onclick="openPaymentModal(${course.id})">Enroll Now</button>
    `;
    courseList.appendChild(courseItem);
});

// Render Blogs
const blogPosts = document.querySelector('.blog-posts');
blogs.forEach(blog => {
    const blogPost = document.createElement('div');
    blogPost.classList.add('blog-post');
    blogPost.innerHTML = `
      <img src="${blog.image}" alt="${blog.title}">
      <h3>${blog.title}</h3>
      <button onclick="window.location.href='blog.html?id=${blog.id}'">Read More</button>
    `;
    blogPosts.appendChild(blogPost);
});

// Open Payment Modal
function openPaymentModal(courseId) {
    document.getElementById('payment-modal').style.display = 'flex';

    // You could fetch course details dynamically to show in the payment modal
    const course = courses.find(c => c.id === courseId);
    console.log("Course for payment:", course);
}

// Close Payment Modal
document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('payment-modal').style.display = 'none';
});

// Payment Form (with basic 2FA placeholder)
document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Simulate sending a verification code (this should be done via API in a real app)
    alert('A verification code has been sent to your phone or email.');

    // Simulate user entering the verification code
    const verificationCode = prompt('Enter the verification code:');

    if (verificationCode === '123456') { // This should be dynamic and secure in a real app
        alert('Payment successful!');
        document.getElementById('payment-modal').style.display = 'none';
    } else {
        alert('Incorrect verification code. Try again.');
    }
});

const twilio = require('twilio');

const client = new twilio('ACCOUNT_SID', 'AUTH_TOKEN');

client.messages.create({
    body: 'Your sciAstra payment verification code is 123456',
    from: '+1XXXXXXXXXX',
    to: '+1RECIPIENT_PHONE'
})