<template>
  <b-container fluid>
    <!-- Main table element -->
    <b-table
      hover head-variant="dark"
      :items="items"
      :fields="fields"
      :current-page="currentPage"
      :per-page="perPage"
      stacked="md"
      show-empty
      @filtered="onFiltered"
    >


      <template #cell(actions)="row">
        <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1">
          編輯
        </b-button>
      </template>

      <template #row-details="row">
        <b-card>
          <ul>
            <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value }}</li>
          </ul>
        </b-card>
      </template>
    </b-table>

    <!-- Info modal -->
    <b-modal :id="infoModal.id" :title="infoModal.title" ok-only @hide="resetInfoModal">
      <pre>{{ infoModal.content }}</pre>
    </b-modal>
  </b-container>
</template>

<script>
export default {
  components: {
  },

   data() {
      return {
        items: [
          { isActive: true, imageUrl: 40, name: 'Dickerson' },
          { isActive: false, imageUrl: 21, name: 'Larsen'},
          {
            isActive: false,
            imageUrl: 9,
            name: 'Mini'
          },
          { isActive: false, imageUrl: 29, name:'Dunlap'  }
        ],
        fields: [
          { key: 'name', label: '圖片名稱' },
          { key: 'imageUrl', label: '圖片超連結'},
          {
            key: 'isActive',
            label: '啟動中?',
            formatter: (value, key, item) => {
              return value ? 'Yes' : 'No'
            },
            sortable: true,
            sortByFormatted: true,
            filterByFormatted: true
          },
          { key: 'actions', label: 'Actions' }
        ],
        totalRows: 1,
        currentPage: 1,
        perPage: 5,
        pageOptions: [5, 10, 15, { value: 100, text: "Show a lot" }],
        sortBy: '',
        sortDesc: false,
        sortDirection: 'asc',
        filter: null,
        filterOn: [],
        infoModal: {
          id: 'info-modal',
          title: '',
          content: ''
        }
      }
    },
    computed: {
      sortOptions() {
        // Create an options list from our fields
        return this.fields
          .filter(f => f.sortable)
          .map(f => {
            return { text: f.label, value: f.key }
          })
      }
    },
    mounted() {
      // Set the initial number of items
      this.totalRows = this.items.length
    },
    methods: {
      info(item, index, button) {
        //this.infoModal.title = `Row index: ${index}`
        //this.infoModal.content = JSON.stringify(item, null, 2)
        //this.$root.$emit('bv::show::modal', this.infoModal.id, button)
        this.$router.push({name: 'EditHomePic', query: { item : item }} );
      },
      resetInfoModal() {
        this.infoModal.title = ''
        this.infoModal.content = ''
      },
      onFiltered(filteredItems) {
        // Trigger pagination to update the number of buttons/pages due to filtering
        this.totalRows = filteredItems.length
        this.currentPage = 1
      }
    }
}
</script>