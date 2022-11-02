import axios from 'axios';

const CROP_API_BASE_URL = "http://localhost:8095/api/crop";
const CROP_API_CROP_URL = "http://localhost:8095/api/addcrop";
const CROP_API_FARMER_URL="http://localhost:8096/api/farmerCrop";
const CROP_API_DEALER_URL="http://localhost:8054/apicart/dealerCart";
const CROP_API_DELETECART_URL="http://localhost:8054/apicart/deletecart";
const CROP_API_GETBYID_URL="http://localhost:8080/submitPaymentDetail"
class PaymentService {

    

    createPayment(crop){
        return axios.post(CROP_API_GETBYID_URL, crop);
    }
}
export default new PaymentService()