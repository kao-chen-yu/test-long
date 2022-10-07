<template>


  <div class="page uploader">

    
    <h1>首頁圖片編輯</h1>
    <br />
            <table class="table">
          <thead>
            <tr>
              <th scope="col">圖片名稱</th>
              <td> 
                    <input type="file" id="file-uploader" style="width:85px" data-target="file-uploader" accept="image/*" multiple="multiple" @change="uploadProfile" />
                    {{items.name}} 
              </td> 
              <td>  
                          
              </td>
            </tr>
            <tr>
              <th scope="col">圖片超連結</th>
              <td contenteditable="true">{{items.imageUrl}}</td>
            </tr>
            <tr>
              <th scope="col">啟動與否</th>
              <td>
              <b-form-checkbox v-model="items.isActive" name="check-button" switch>
                Switch Checkbox <b>(Checked: {{ items.isActive }})</b>
              </b-form-checkbox>
              </td>
            </tr>
          </thead>
        </table>

        <b-button>儲存</b-button>

  
  
  </div>
</template>
<script>
export default {
  data() {
    return {
      fileList: [],
      items : {},
    }
  },
  created(){
       this.items = JSON.parse(JSON.stringify(this.$route.query.item));
       console.log(this.items);
  },
  methods: {
    submitUpload() {
      console.log("submit")
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    handleChange(file, fileList) {
      console.log('upload obj: ',file, fileList)
    },
    uploadProfile(){
      alert('change');
      this.applyPicPath = document.getElementById("file-uploader").files[0];//獲取檔案資訊

      this.items.name = this.applyPicPath.name;

    }
  }
}
</script>

<style scoped>
 .upload-demo{
   margin-left : 100px;
 }
</style>