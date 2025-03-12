import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Warpindex",
  description: "Terms and conditions for using Warpindex's services and platform.",
};

export default function TermsPage() {
  return (
    <main className="flex flex-1 flex-col">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <Link href="/" className="text-3xl text-primary hover:text-primary/90 transition-colors mb-4">
            Warpindex
          </Link>
          <h1 className="text-4xl font-medium">Terms of Service</h1>
          <p className="mt-4 text-xl text-muted-foreground">Please read these terms carefully before using our services</p>
        </div>

        {/* Content */}
        <div className="prose prose-gray max-w-4xl mx-auto dark:prose-invert">
          <h3><strong>Introduction</strong></h3>
          <p>
            These Terms of Service (&quot;Terms&quot;, &quot;Terms of Service&quot;) govern your use of our service and website located at https://www.warpindex.com and https://app.warpindex.com (&quot;Service&quot;), operated by Exa Labs, LLC (&quot;Company&quot;, &quot;Warpindex&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;).
          </p>

          <p>
            Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard and disclose information that results from your use of our website and Service. Please read it here https://www.warpindex.com/privacy.
          </p>

          <p>
            Your agreement with us includes these Terms and our Privacy Policy (&quot;Agreements&quot;). You acknowledge that you have read and understood Agreements, and agree to be bound by them.
          </p>

          <p>
            If you do not agree with (or cannot comply with) Agreements, then you may not use the Service, but please let us know by emailing at contact@warpindex.com so we can try to find a solution. These Terms apply to all visitors, users and others who wish to access or use Service.
          </p>

          <h3><strong>Communications</strong></h3>
          <p>
            By creating an Account on our Service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or by emailing at contact@warpindex.com.
          </p>

          <h3><strong>Purchases</strong></h3>
          <p>
            If you wish to purchase any product or service made available through Service (&quot;Purchase&quot;), you may be asked to supply certain information relevant to your Purchase including, without limitation, your credit card number, the expiration date of your credit card, your billing address, and your shipping information.
          </p>

          <p>
            You represent and warrant that: (i) you have the legal right to use any credit card(s) or other payment method(s) in connection with any Purchase; and that (ii) the information you supply to us is true, correct and complete.
          </p>

          <p>
            We may employ the use of third party services for the purpose of facilitating payment and the completion of Purchases. By submitting your information, you grant us the right to provide the information to these third parties subject to our Privacy Policy.
          </p>

          <p>
            We reserve the right to refuse or cancel your order at any time for reasons including but not limited to: product or service availability, errors in the description or price of the product or service, error in your order or other reasons.
          </p>

          <p>
            We reserve the right to refuse or cancel your order if fraud or an unauthorized or illegal transaction is suspected.
          </p>

          <h3><strong>Subscriptions</strong></h3>
          <p>
            Some parts of Service are billed on a subscription basis (&quot;Subscription(s)&quot;). You will be billed in advance on a recurring and periodic basis (&quot;Billing Cycle&quot;). Billing cycles are set either on a monthly or annual basis, depending on the type of subscription plan you select when purchasing a Subscription.
          </p>

          <p>
            At the end of each Billing Cycle, your Subscription will automatically renew under the exact same conditions unless you cancel it or Warpindex cancels it. You may cancel your Subscription renewal by contacting Warpindex customer support team. Upon notice of non-renewal, you will not be charged for the next billing cycle but will not receive any refunds or credits for amounts that have already been charged.
          </p>

          <p>
            A valid payment method, including credit card, is required to process the payment for your subscription. You shall provide Warpindex with accurate and complete billing information including full name, address, state, zip code, telephone number, and a valid payment method information. By submitting such payment information, you automatically authorize Warpindex to charge all Subscription fees incurred through your account to any such payment instruments.
          </p>

          <h3><strong>Free Trial</strong></h3>
          <p>
            Warpindex may, at its sole discretion, offer a Subscription with a free trial for a limited period of time (&quot;Free Trial&quot;).
          </p>

          <p>
            You may be required to enter your billing information in order to sign up for Free Trial.
          </p>

          <p>
            If you do enter your billing information when signing up for Free Trial, you will not be charged by Warpindex until Free Trial has expired. On the last day of Free Trial period, unless you cancelled your Subscription, you will be automatically charged the applicable Subscription fees for the type of Subscription you have selected.
          </p>

          <p>
            At any time and without notice, Warpindex reserves the right to (i) modify Terms of Service of Free Trial offer, or (ii) cancel such Free Trial offer.
          </p>

          <h3><strong>Fee Changes</strong></h3>
          <p>
            Warpindex, in its sole discretion and at any time, may modify Subscription fees for the Subscriptions. Any Subscription fee change will become effective at the end of the then-current Billing Cycle.
          </p>

          <p>
            Warpindex will provide you with reasonable prior notice of any change in Subscription fees to give you an opportunity to terminate your Subscription before such change becomes effective.
          </p>

          <p>
            Your continued use of Service after Subscription fee change comes into effect constitutes your agreement to pay the modified Subscription fee amount.
          </p>

          <h3><strong>Refunds</strong></h3>
          <p>
            Except when required by law, paid Subscription fees are non-refundable.
          </p>

          <h3><strong>Content</strong></h3>
          <p>
            Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material (&quot;Content&quot;). You are responsible for Content that you post on or through Service, including its legality, reliability, and appropriateness.
          </p>

          <p>
            By posting Content on or through Service, You represent and warrant that: (i) Content is yours (you own it) and/or you have the right to use it and the right to grant us the rights and license as provided in these Terms, and (ii) that the posting of your Content on or through Service does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person or entity. We reserve the right to terminate the account of anyone found to be infringing on a copyright.
          </p>

          <h3><strong>Prohibited Uses</strong></h3>
          <p>You may use Service only for lawful purposes and in accordance with Terms. You agree not to use Service:</p>
          <ol>
            <li>In any way that violates any applicable national or international law or regulation.</li>
            <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by exposing them to inappropriate content or otherwise.</li>
            <li>To transmit, or procure the sending of, any advertising or promotional material, including any &quot;junk mail&quot;, &quot;chain letter,&quot; &quot;spam,&quot; or any other similar solicitation.</li>
            <li>To impersonate or attempt to impersonate Company, a Company employee, another user, or any other person or entity.</li>
            <li>In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful, or in connection with any unlawful, illegal, fraudulent, or harmful purpose or activity.</li>
          </ol>

          <h3><strong>Disclaimer Of Warranty</strong></h3>
          <p>
            THESE SERVICES ARE PROVIDED BY COMPANY ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS. COMPANY MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF THEIR SERVICES, OR THE INFORMATION, CONTENT OR MATERIALS INCLUDED THEREIN. YOU EXPRESSLY AGREE THAT YOUR USE OF THESE SERVICES, THEIR CONTENT, AND ANY SERVICES OR ITEMS OBTAINED FROM US IS AT YOUR SOLE RISK.
          </p>

          <h3><strong>Limitation Of Liability</strong></h3>
          <p>
            EXCEPT AS PROHIBITED BY LAW, YOU WILL HOLD US AND OUR OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS HARMLESS FOR ANY INDIRECT, PUNITIVE, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGE, HOWEVER IT ARISES (INCLUDING ATTORNEYS&apos; FEES AND ALL RELATED COSTS AND EXPENSES OF LITIGATION AND ARBITRATION, OR AT TRIAL OR ON APPEAL, IF ANY, WHETHER OR NOT LITIGATION OR ARBITRATION IS INSTITUTED), WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE, OR OTHER TORTIOUS ACTION, OR ARISING OUT OF OR IN CONNECTION WITH THIS AGREEMENT, INCLUDING WITHOUT LIMITATION ANY CLAIM FOR PERSONAL INJURY OR PROPERTY DAMAGE, ARISING FROM THIS AGREEMENT AND ANY VIOLATION BY YOU OF ANY FEDERAL, STATE, OR LOCAL LAWS, STATUTES, RULES, OR REGULATIONS, EVEN IF COMPANY HAS BEEN PREVIOUSLY ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
          </p>

          <h3><strong>Governing Law</strong></h3>
          <p>
            These Terms shall be governed and construed in accordance with the laws of the state of Wyoming without regard to its conflict of law provisions.
          </p>

          <p>
            Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service and supersede and replace any prior agreements we might have had between us regarding Service.
          </p>

          <h3><strong>Changes To Terms</strong></h3>
          <p>
            We reserve the right to modify these terms at any time. We will notify you of any changes by posting the new Terms of Service on this page.
          </p>

          <p>
            You are advised to review these Terms periodically for any changes. Changes to these Terms are effective when they are posted on this page.
          </p>

          <h3><strong>Contact Us</strong></h3>
          <p>If you have any questions about these Terms, please contact us:</p>
          <p>By email: contact@warpindex.com</p>
        </div>
      </div>
    </main>
  );
}