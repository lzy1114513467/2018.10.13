<template>
    <div>
        <h1>{{$store.state.count}}</h1>
        <button @click="$store.commit('add',2)">加1</button>
    </div>
        
    
</template>

<script>
import store from '@/store.js';
import{ mapState,mapMutations,mapGetters} from "vuex";
export default {
    store,
    data(){
        return{

        }
    }
}
methods: 
 mapMutations([])   


computed: {
 mapState(['count']),
 mapGetters(['count'])   
}

</script>