<template>
  <div>
    <b-container>
        <div class="d-flex justify-content-center flex-column align-items-center mt-5">
      <h1>{{ friend.name }}'s  profile</h1>
      <br />
      <b-card class="cardw">
          <b-table-simple borderless>
              <b-tbody>
                  <b-tr>
                      <b-th>
                          Email:
                      </b-th>
                      <b-td>
                          {{friend.email}}
                      </b-td>
                  </b-tr>
                  <b-tr>
                      <b-th>
                          Home Address:
                      </b-th>
                      <b-td>
                          {{friend.homeAddress}}
                      </b-td>
                  </b-tr>
                  <b-tr>
                      <b-th>
                          Phone number:
                      </b-th>
                      <b-td>
                          {{friend.telephoneNumber}}
                      </b-td>
                  </b-tr>
              </b-tbody>
          </b-table-simple>
      </b-card>
    </div>
    </b-container>
  </div>
</template>

<script>

export default {
    computed:{
        friend() {
           return this.$store.getters.friendProfile
        }
    },            

    created(){
        this.$store.dispatch('getFriendProfile')
    }
}
</script>

<style>
.cardw{
    max-width: 30rem;
}
</style>