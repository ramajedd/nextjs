import LayoutKonten from '../../../components/layoutKonten'
import Layout from '../../../components/layout'
import Tabel from "../../../components/element/table"
import FormPenerimaan from "../../../components/formPenerimaan/"


export default function Transaksi() {
  
  return (
    <Layout>
      <LayoutKonten 
        type='konten'
        page ={1}
      >
        <FormPenerimaan
          suggestionsPenjualan=
          {[
            "Alligator",
            "Bask",
            "Crocodilian",
            "Death Roll",
            "Eggs",
            "Jaws",
            "Reptile",
            "Solitary",
            "Tail",
            "Wetlands"
        ]}
        suggestionsPenerimaanLain = {['oke', 'oncom', 'amir']}

        />
        
        <Tabel/>
      </LayoutKonten>
    </Layout>


  )
}