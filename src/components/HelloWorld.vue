<template>
  <div class="hello">
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header">
            <marquee behavior="" direction="">
              <h1>কভিড ১৯ বাংলাদেশ</h1>
            </marquee>
          </div>
          <div class="card-body">
            <div class="card">
              <div class="row text-center">

                <div class="col-lg-3 col-md-6 mb-4">
                  <div class="card h-100">

                    <div class="card-body text-danger">
                      <h4 class="card-title">মোট আক্রান্ত</h4>
                      <h4 class="card-text">{{total_confirmed}}</h4>
                    </div>
                    <div class="card-footer bg-danger"></div>
                  </div>
                </div>

                <div class="col-lg-3 col-md-6 mb-4">
                  <div class="card h-100">

                    <div class="card-body text-primary">
                      <h4 class="card-title">মোট সুস্থ</h4>
                      <h4 class="card-text">{{total_recovered}}</h4>
                    </div>
                    <div class="card-footer bg-primary"></div>
                  </div>
                </div>

                <div class="col-lg-3 col-md-6 mb-4">
                  <div class="card h-100">

                    <div class="card-body text-warning">
                      <h4 class="card-title">মোট মৃত্যু</h4>
                      <h4 class="card-text">{{total_deaths}}</h4>
                    </div>
                    <div class="card-footer bg-warning"></div>
                  </div>
                </div>

                <div class="col-lg-3 col-md-6 mb-4">
                  <div class="card h-100">

                    <div class="card-body text-success">
                      <h4 class="card-title">মোট নমুনা পরীক্ষা</h4>
                      <h4 class="card-text">{{total_tested}}</h4>
                    </div>
                    <div class="card-footer bg-success"></div>
                  </div>
                </div>


                <div class="col-lg-3 col-md-6 mb-4">
                  <div class="card h-100">

                    <div class="card-body text-danger">
                      <h4 class="card-title">নতুন আক্রান্ত</h4>
                      <h4 class="card-text">{{new_confirmed}}</h4>
                    </div>
                    <div class="card-footer bg-danger"></div>
                  </div>
                </div>

                <div class="col-lg-3 col-md-6 mb-4">
                  <div class="card h-100">

                    <div class="card-body text-danger">
                      <h4 class="card-title">নতুন সুস্থ</h4>
                      <h4 class="card-text">{{new_recovered}}</h4>
                    </div>
                    <div class="card-footer bg-danger"></div>
                  </div>
                </div>

                <div class="col-lg-3 col-md-6 mb-4">
                  <div class="card h-100">

                    <div class="card-body text-danger">
                      <h4 class="card-title">নতুন মৃত্যু</h4>
                      <h4 class="card-text">{{new_deaths}}</h4>
                    </div>
                    <div class="card-footer bg-danger"></div>
                  </div>
                </div>

                <div class="col-lg-3 col-md-6 mb-4">
                  <div class="card h-100">

                    <div class="card-body text-danger">
                      <h4 class="card-title">নতুন নমুনা পরীক্ষা</h4>
                      <h4 class="card-text">{{new_tested}}</h4>
                    </div>
                    <div class="card-footer bg-danger"></div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header">
            <marquee behavior="" direction="">
              <h1> অঞ্চলভিত্তিক তথ্য </h1>
            </marquee>
          </div>
          <div class="card-body">
            <div class="row">

              <div class="table-responsive">
                <table id="example" class="table table-striped table-bordered" style="width:100%">
                  <thead>
                    <tr>
                      <th>#SL</th>
                      <th>Name</th>
                      <th>Confirmed</th>
                      <th>Recovered</th>
                      <th>Deaths</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(district,index) in districts" :key="index">
                      <td>{{index+page_count+1}}</td>
                      <!-- <td>{{((index+1) - 1) * page}}</td> -->
                      <td>{{district.name}}</td>
                      <td>{{district.confirmed}}</td>
                      <td>{{district.recovered}}</td>
                      <td>{{district.deaths}}</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th>#SL</th>
                      <th>Name</th>
                      <th>Confirmed</th>
                      <th>Recovered</th>
                      <th>Deaths</th>
                    </tr>
                  </tfoot>
                </table>
                <nav aria-label="Page navigation example">
                  <ul class="pagination">

                    <li class="page-item"><a v-show="current_page != 1" class="page-link" href="javascript:void(0)"
                        @click="get_districts(current_page-1)">Previous</a></li>

                    <li v-for="(p_no,index) in Math.ceil(districts_all.length/10)" :key="index"
                      v-bind:class="{'page-item':true, 'active':(p_no === current_page)}"><a class="page-link "
                        href="javascript:void(0)" @click="get_districts(p_no)">{{p_no}}</a></li>
                    <li class="page-item"><a v-show="current_page != total_page_number" class="page-link" href="javascript:void(0)"
                        @click="get_districts(current_page+1)"> Next</a></li>
                  </ul>
                </nav>







              </div>
            </div>
          </div>
          <div class="card-footer">
            <span class="float-center text-muted">Copyright &copy; <i><b>azam hossen</b></i></span>
            <marquee behavior="" direction=""> কারিগরি সহায়তা : ইঞ্জিনিয়ার রেজাউর রহমান </marquee>
          </div>
        </div>
      </div>
    </div>







  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    },
    data() {
      return {
        colors: ['#1abc9c', '#e74c3c', '#8e44ad', '#2ecc71', '#3498db', '#f1c40f', '#c0392b', '#95a5a6'],
        count: 0,
        total_confirmed: null,
        total_deaths: null,
        total_tested: null,
        total_recovered: null,
        new_confirmed: null,
        new_deaths: null,
        new_tested: null,
        new_recovered: null,
        districts: [],
        districts_all: [],
        // page: 10,
        current_page: null,
        page_count: 1,
        total_page_number : null


      }

    },
    created() {
      axios.get('https://fastaar.com/api')
        .then((res) => {
          console.log(res.data.districts);
          this.total_confirmed = res.data.total.confirmed;
          this.total_deaths = res.data.total.deaths;
          this.total_tested = res.data.total.tested;
          this.total_recovered = res.data.total.recovered;
          this.new_confirmed = res.data.new.confirmed;
          this.new_deaths = res.data.new.deaths;
          this.new_tested = res.data.new.tested;
          this.new_recovered = res.data.total.recovered;
          this.districts_all = res.data.districts;
          // this.districts = this.districts_all.slice(0,9);
          // console.log(this.dis);
          this.get_districts(1);
          
        });

      // this.todo();

    },
    methods: {
      // todo: function () {
      //   this.intervalid1 = setInterval(() => {
      //     // this.changes = ((Math.random() * 100).toFixed(2))+'%';
      //     // console.log (this.changes);
      //     document.getElementById('hello').style.background = this.colors[this.count % 8];
      //     this.count++;
      //   }, 3000);
      // }

      get_districts(page_no) {
        this.current_page = page_no;
        var start = (page_no - 1) * 10;
        var end = start + 10;
        this.districts = this.districts_all.slice(start, end);
        this.page_count = (page_no - 1) * 10;
        this.total_page_number = Math.ceil(this.districts_all.length/10);
        console.log(this.total_page_number);
        
      }
    }


  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>