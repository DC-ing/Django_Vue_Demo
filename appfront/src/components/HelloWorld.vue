<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- show books list -->
    <ul>
      <li v-for="(book, index) in books" :key="index" style="display: block">
        {{index + 1}}-{{book.name}}-{{book.author}}
      </li>
    </ul>
    <!-- form to add a book -->
    <form action="">
      输入书名：<label>
      <input type="text" placeholder="book name" v-model="inputBook.name">
    </label>
      <br>
      输入作者：<label>
      <input type="text" placeholder="book author" v-model="inputBook.author">
    </label>
      <br>
    </form>
    <button type="submit" @click="bookSubmit()">submit</button>
  </div>
</template>

<script>
import {getBooks, postBook} from "@/api/api";

export default {
  name: 'HelloWorld',
  // props: {
  //   msg: String
  // },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      books: [],
      // book data in the form
      inputBook: {
        name: "",
        author: ""
      }
    }
  },
  methods: {
    loadBooks () {
      getBooks().then(response => {
        this.books = response.data
      })
    }, // load books list when visit the page
    bookSubmit () {
      postBook(this.inputBook.name, this.inputBook.author).then(response => {
        console.log(response)
        this.loadBooks()
      })
    } // add a book to backend when click the button
  },
  created: function () {
    this.loadBooks()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
