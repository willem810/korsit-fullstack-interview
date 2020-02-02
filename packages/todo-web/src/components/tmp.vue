<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 mb-5">
        <h2>{{msg}}</h2>
        <hr />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A deserunt neque tempore recusandae animi soluta quasi? Asperiores rem dolore eaque vel, porro, soluta unde debitis aliquam laboriosam. Repellat explicabo, maiores!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis optio neque consectetur consequatur magni in nisi, natus beatae quidem quam odit commodi ducimus totam eum, alias, adipisci nesciunt voluptate. Voluptatum.</p>
        <a class="btn btn-primary btn-lg" href="#">Call to Action &raquo;</a>
      </div>
      <div class="col-md-4 mb-5">
        <h2>Contact Us</h2>
        <hr />
        <address>
          <strong>Start Bootstrap</strong>
          <br />3481 Melrose Place
          <br />Beverly Hills, CA 90210
          <br />
        </address>
        <address>
          <abbr title="Phone">P:</abbr>
          (123) 456-7890
          <br />
          <abbr title="Email">E:</abbr>
          <a href="mailto:#">name@example.com</a>
        </address>
      </div>
    </div>
    <!-- /.row -->

    <div class="row">
      <div class="col-md-4 mb-5" v-for="todo in todos" v-bind:key="todo">
        <div class="card h-100">
          <img class="card-img-top" src="http://placehold.it/300x200" alt />
          <div class="card-body">
            <h4 class="card-title">Card title</h4>
            <p class="card-text">{{todo.text}}</p>
          </div>
          <div class="card-footer">
            <a href="#" class="btn btn-primary">Find Out More!</a>
          </div>
        </div>
      </div>
    </div>
    <!-- /.row -->
  </div>
  <!-- /.container -->
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
    test: String
  }
};
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
