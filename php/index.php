<?php
namespace Phppot;

require_once __DIR__ . '/config.php';
$currencies = Config::getCurrency();
$country = Config::getAllCountry();

?>
<h1>Stripe payment integration via custom form</h1>
<div class="phppot-container">
    <div id="payment-box"
        data-consumer-key="<?php echo Config::STRIPE_PUBLISHIABLE_KEY; ?>"
        data-create-order-url="<?php echo Config::CREATE_STRIPE_ORDER;?>"
        data-return-url="<?php echo Config::THANKYOU_URL;?>">
        <div class="row">
            <div class="label">
                Name <span class="error-msg" id="name-error"></span>
            </div>
            <input type="text" name="customer_name" class="input-box"
                id="customer_name">
        </div>
        <div class="row">
            <div class="label">
                Email <span class="error-msg" id="email-error"></span>
            </div>
            <input type="text" name="email" class="input-box" id="email">
        </div>
        <div class="row">
            <div class="label">
                Address <span class="error-msg" id="address-error"></span>
            </div>
            <input type="text" name="address" class="input-box"
                id="address">
        </div>
        <div class="row">
            <div class="label">
                Country <span class="error-msg" id="country-error"></span>
            </div>
            <input list="country-list" name="country" class="input-box"
                id="country">
            <datalist id="country-list">
                <?php foreach ($country as $key => $val) { ?>
             <option value="<?php echo $key;?>"><?php echo $val;?></option>
                <?php }?>
                    </datalist>
        </div>
        <div class="row">
            <div class="label">
                Postal code <span class="error-msg" id="postal-error"></span>
            </div>
            <input type="text" name="postal_code" class="input-box"
                id="postal_code">
        </div>
        <div class="row">
            <div class="label">
                Description <span class="error-msg" id="notes-error"></span>
            </div>
            <input type="text" name="notes" class="input-box" id="notes">
        </div>
        <div class="row">
            <div class="label">
                Amount <span class="error-msg" id="price-error"></span>
            </div>
            <input type="text" name="price" class="input-box" id="price">
        </div>
        <div class="row">
            <div class="label">
                Currency <span class="error-msg" id="currency-error"></span>
            </div>
            <input list="currency-list" name="currency"
                class="input-box" id="currency">
            <datalist id="currency-list">
            <?php foreach ($currencies as $key => $val) { ?>
             <option value="<?php echo $key;?>"><?php echo $val;?></option>
                <?php }?>
                    </datalist>

        </div>
        <div class="row">
            <div id="card-element">
                <!--Stripe.js injects the Card Element-->
            </div>
        </div>
        <div class="row">
            <button class="btnAction" id="btn-payment"
                onclick="confirmOrder(event);">
                <div class="spinner hidden" id="spinner"></div>
                <span id="button-text">Send Payment</span>
            </button>
            <p id="card-error" role="alert"></p>
        </div>

    </div>
        <?php
        if (! empty($_GET["action"]) && $_GET["action"] == "success") {
            ?><div class="success">Thank you for the payment.</div>
    <?php
        }
        ?>

<?php
namespace Phppot;

use Stripe\Stripe;
use Stripe\WebhookEndpoint;
require_once __DIR__ . '/../vendor/autoload.php';
require_once __DIR__ . '/../Config.php';

class StripeService
{

    private $apiKey;

    private $stripeService;

    public function __construct()
    {
        require_once __DIR__ . '/../Config.php';
        $this->apiKey = Config::STRIPE_SECRET_KEY;
        $this->stripeService = new Stripe();
        $this->stripeService->setVerifySslCerts(false);
        $this->stripeService->setApiKey($this->apiKey);
    }

    public function createPaymentIntent($orderReferenceId, $amount, $currency, $email, $customerDetailsArray, $notes, $metaData)
    {
        try {
            $this->stripeService->setApiKey($this->apiKey);

            $paymentIntent = \Stripe\PaymentIntent::create([
                'description' => $notes,
                'shipping' => [
                    'name' => $customerDetailsArray["name"],
                    'address' => [
                        'line1' => $customerDetailsArray["address"],
                        'postal_code' => $customerDetailsArray["postalCode"],
                        'country' => $customerDetailsArray["country"]
                    ]
                ],
                'amount' => $amount * 100,
                'currency' => $currency,
                'payment_method_types' => [
                    'card'
                ],
                'metadata' => $metaData
            ]);
            $output = array(
                "status" => "success",
                "response" => array('orderHash' => $orderReferenceId, 'clientSecret'=>$paymentIntent->client_secret)
            );
        } catch (\Error $e) {
            $output = array(
                "status" => "error",
                "response" => $e->getMessage()
            );
        }
        return $output;
    }


    public function getToken()
    {
        $token = "";
        $codeAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        $codeAlphabet .= "abcdefghijklmnopqrstuvwxyz";
        $codeAlphabet .= "0123456789";
        $max = strlen($codeAlphabet) - 1;
        for ($i = 0; $i < 17; $i ++) {
            $token .= $codeAlphabet[mt_rand(0, $max)];
        }
        return $token;
    }

}



<script src="index.js"></script>
<script src="index2.js"></script>