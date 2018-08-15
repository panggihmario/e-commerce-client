<template>
     <v-layout row justify-center>
        <v-dialog v-model="dialogEdit"  max-width="500px">
            <main style="background-color:white">
            <v-card>
                <v-card-title>
                    <span class="headline">Edit Item</span>
                </v-card-title>
                <v-card-text>
                    <v-container grid-list-md>
                    <v-layout wrap>
                        <v-flex xs12>
                            <v-text-field label="Item Name" v-model="inputName"></v-text-field>
                        </v-flex>
                        <v-flex xs12>
                            <v-text-field label="Category" v-model="inputCategory"></v-text-field>
                        </v-flex>
                        <v-flex xs12>
                            <v-text-field label="Price" v-model="inputPrice"></v-text-field>
                        </v-flex>
                        <v-flex xs12>
                            <input type="file" v-on:change="getImage">
                        </v-flex>
                    </v-layout>
                    </v-container>
                    <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" flat @click.native="dialogEdit = false">Close</v-btn>
                    <v-btn color="blue darken-1" flat @click.native="dialogEdit = false" @click="edit(editItem._id)">Save</v-btn>
                </v-card-actions>
            </v-card>
            </main>
        </v-dialog>
    </v-layout>
</template>


<script>
import {mapActions,mapState} from 'vuex'
export default {
    methods :{
        ...mapActions([
            "edit","getImage"
        ])
    },
    computed : {
        ...mapState([
            "editItem","itemName","category","price"
        ]),
        dialogEdit : {
            get(){
                return this.$store.state.dialogEdit
            },
            set(){
                this.$store.commit('setDialogEdit',false)
            }
        },
        inputName:{
            get(){
                return this.$store.state.itemName
            },
            set(value){
                this.$store.commit('setItemName',value)
            }
        },
        inputCategory :{
            get(){
                return this.$store.state.category
            },
            set(value){
                this.$store.commit('setCategory',value)
            }
        },
        inputPrice :{
            get(){
                return this.$store.state.price
            },
            set(value){
                this.$store.commit('setPrice',value)
            }
        },
        inputUrl : {
            get(){
                return this.$store.state.url
            },
            set(value){
                this.$store.commit('setUrl',value)
            }
        }
    }

}
</script>
