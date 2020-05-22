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

                    <div class="card-body text-info">
                      <h4 class="card-title">মোট আক্রান্ত</h4>
                      <h4 class="card-text">{{total_confirmed}}</h4>
                    </div>
                    <div class="card-footer bg-info"></div>
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
                      <h4 class="card-text">{{last_confirmed}}</h4>
                    </div>
                    <div class="card-footer bg-danger"></div>
                  </div>
                </div>

                <div class="col-lg-3 col-md-6 mb-4">
                  <div class="card h-100">

                    <div class="card-body text-danger">
                      <h4 class="card-title">নতুন সুস্থ</h4>
                      <h4 class="card-text">{{last_recovered}}</h4>
                    </div>
                    <div class="card-footer bg-danger"></div>
                  </div>
                </div>

                <div class="col-lg-3 col-md-6 mb-4">
                  <div class="card h-100">

                    <div class="card-body text-danger">
                      <h4 class="card-title">নতুন মৃত্যু</h4>
                      <h4 class="card-text">{{last_deaths}}</h4>
                    </div>
                    <div class="card-footer bg-danger"></div>
                  </div>
                </div>

                <div class="col-lg-3 col-md-6 mb-4">
                  <div class="card h-100">

                    <div class="card-body text-danger">
                      <h4 class="card-title">নতুন নমুনা পরীক্ষা</h4>
                      <h4 class="card-text">{{last_tested}}</h4>
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
                <!-- <input type="text" class="form-control" v-model="search" placeholder="Search district name"> -->
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
                    <tr v-for="(district,index) in searchDistrict" :key="index">
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


    <!-- <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header">
            লিঙ্গভিত্তিক কভিড আক্রান্ত
          </div>
          <div class="card-body">
            <pie-chart :data="pie"></pie-chart>
          </div>
        </div>
      </div>
    </div> -->

    <!-- <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header">
           বয়সভিত্তিক কভিড আক্রান্ত
          </div>
          <div class="card-body">
            <column-chart  :colors='["#63b598", "#ce7d78", "#ea9e70", "#a48a9e", "#c6e1e8", "#c6e1e8", "#c6e1e8"]'  :data="ages"></column-chart>
          </div>
        </div>
      </div>
    </div> -->







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
        getData : {
          '12-2-2020':2,
          '13-3-2020':3,
          '14-4-2020':4,
        },
        // colors: ['#1abc9c', '#e74c3c', '#8e44ad', '#2ecc71', '#3498db', '#f1c40f', '#c0392b', '#95a5a6'],
        pie : [],
        column : [],
        count: 0,
        total_confirmed: null,
        total_deaths: null,
        total_tested: null,
        total_recovered: null,
        last_confirmed: null,
        last_deaths: null,
        last_tested: null,
        last_recovered: null,
        districts: [],
        districts_all: [],
        gender : {
          male : 0,
          female : 0
        },
        ages : {
          "0-10" : 0,
          "11-20" : 0,
          "21-30" : 0,
          "31-40" : 0,
          "41-50" : 0,
          "51-60" : 0,
          "60+" : 0
        },
        // page: 10,
        current_page: null,
        page_count: 1,
        total_page_number : null,
        search : ""


      }

    },
    computed : {
      
      searchDistrict(){
        return this.districts.filter((district)=>{
          return  district.name.match(this.search);
        });
      }
    },
    created() {
      console.log(this.ages["0-10"]);
      axios.get('https://corona.in.com.bd/api/districts')
        .then((res) => {
          console.log(res.data.data);
          this.districts_all = res.data.data;
          this.get_districts(1);
          
        });
        axios.get('https://corona.in.com.bd/api/stats')
        .then((res)=>{
           this.total_confirmed = res.data.total.confirmed;
          this.total_deaths = res.data.total.deaths;
          this.total_tested = res.data.total.tested;
          this.total_recovered = res.data.total.recovered;
           this.last_confirmed = res.data.last.confirmed;
          this.last_deaths = res.data.last.deaths;
          this.last_tested = res.data.last.tested;
          this.last_recovered = res.data.last.recovered;
           
        });

        axios.get('https://corona.in.com.bd/api/genders')
        .then((res)=>{
          console.log(res.data.data);
          this.gender.male = res.data.data.male.confirmed;
          this.gender.female = res.data.data.female.confirmed;
          this.pie_chart_data();
        });

        axios.get("https://corona.in.com.bd/api/ages")
        .then((res)=>{
          // console.log(res.data.data);
          this.ages["0-10"] = res.data.data.onetoten.confirmed;
          this.ages["11-20"] = res.data.data.eleventotwenty.confirmed;
          this.ages["21-30"] = res.data.data.twentyonetothirty.confirmed;
          this.ages["31-40"] = res.data.data.thirtyonetofourty.confirmed;
          this.ages["41-50"] = res.data.data.fourtyonetofifty.confirmed;
          this.ages["51-60"] = res.data.data.fiftyonetosixty.confirmed;
          this.ages["60+"] = res.data.data.sixtyplus.confirmed;
          console.log(this.ages);
        });

      // this.todo();
     

    },
    methods: {
     
      
      get_districts(page_no) {
        this.current_page = page_no;
        var start = (page_no - 1) * 10;
        var end = start + 10;
        this.districts = this.districts_all.slice(start, end);
        this.page_count = (page_no - 1) * 10;
        this.total_page_number = Math.ceil(this.districts_all.length/10);
        
      },
      pie_chart_data(){
         this.pie = [
          ['male',this.gender.male],
          ['female',this.gender.female],
         ];
      },
      column_cart_data(){
        this.column = [

        ];
      }
    }


  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>