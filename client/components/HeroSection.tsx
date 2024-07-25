"use client";
import Image from "next/image";
import hero from "../public/images/undraw_doctor_kw5l.png";
import { ChangeEvent, useEffect, useState } from "react";
import SuccessModal from "./SuccessModal";
import axios from "axios";
import ErrorMessage from "./ErrorMessage";

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState("");
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const postEmail: () => Promise<void> = async () => {
    setLoading(true);
    try {
      const postedEmail = await axios.post(
        "https://ai-learn-5bec.onrender.com",
        {
          email,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setEmail("");
      console.log(postedEmail);
      setLoading(false);
      toggle();
    } catch (error: any) {
      setError(error?.message);
      setLoading(false);
      console.error(error?.message);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };
  // useEffect(() => {
  //   // setTimeout(() => {
  //   setError("");
  //   // }, 5000);
  // }, []);
  return (
    <>
      <SuccessModal isOpen={isOpen} toggle={toggle} />
      <section className="mt-10 mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8">
        <div className="space-y-4 flex-1 sm:text-center lg:text-left">
          <h1 className="text-indigo-700 font-bold text-4xl xl:text-5xl">
            Unlock your learning potential with AI-Powered Learning
          </h1>
          <p className="text-gray-600 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
            By leveraging AI technology, we are transforming the way students
            learn from their handout by enabling them to actively learn and
            engage with their materials.
          </p>
          <h3 className="text-indigo-700 text-3xl font-semibold">
            Join the waitlist to get notified when we launch
          </h3>
          {error !== "" && <ErrorMessage errorMessage={error} />}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              postEmail();
              // toggle();
            }}
            className="flex items-center justify-center border rounded-lg p-1"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className={
                loading
                  ? "text-gray-500 w-full p-2 outline-none cursor-not-allowed"
                  : "text-gray-500 w-full p-2 outline-none"
              }
              onChange={handleEmail}
              value={email}
              required
              disabled={loading ? true : false}
            />
            <button
              type="submit"
              disabled={loading ? true : false}
              className={
                loading
                  ? "py-2 px-3 rounded-lg font-medium text-white bg-indigo-500 outline-none shadow-md focus:shadow-none sm:px-4 cursor-not-allowed"
                  : "py-2 px-3 rounded-lg font-medium text-white bg-indigo-700 hover:bg-indigo-600 active:bg-indigo-700 duration-150 outline-none shadow-md focus:shadow-none sm:px-4"
              }
              // onClick={toggle}
            >
              <div className="inline-flex items-center space-x-2">
                {loading && (
                  <div className="animate-pulse w-3 h-3 rounded-full bg-white"></div>
                )}
                {loading ? (
                  <p>Loading...</p>
                ) : (
                  <p className="text-center">Join</p>
                )}
              </div>
            </button>
          </form>
        </div>
        <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
          {/* <Image src={hero} alt="Doctor" priority={true} /> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="355.47002"
            height="281.75536"
            viewBox="0 0 855.47002 681.75536"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path
              d="M571.5975,149.33241c-.12527,.02138-.31293,.05318-.54042,.09083-4.45166,.73689-31.36603,4.88942-58.50119-5.44719-11.49536-4.37895-7.57399-5.47034-33.17593-20.69436-30.0155-17.84848-37.71851-17.72375-39.95371-26.04619-4.46318-16.61855,19.36904-42.74324,35.1434-41.02317,4.15301,.45287,8.60071,2.92883,15.5185,1.24997,1.51988-.36885,8.17314-1.9835,11.41664-7.49075,2.89343-4.91287,.44277-8.45685,1.60645-12.4861,3.0544-10.57625,28.51545-15.85436,50.83788-12.12509,12.83894,2.14495,22.82514,8.00077,42.27314,19.62489,33.85001,20.23208,50.77483,30.34814,54.57873,45.84706,3.60544,14.69016-5.04806,21.02,1.24544,36.74533,5.86013,14.64221,15.16756,13.66425,18.3704,25.50919,5.15408,19.06075-13.97551,39.98007-21.94432,48.69443-8.73679,9.55424-17.0924,14.79793-28.18511,21.75929-13.92329,8.73773-20.88475,13.10657-29.25457,12.66208-15.17489-.8059-60.26717,1.93742-60.85533-10.62024-.22038-4.70619-54.90973-.85278-27.98046-51.52012,3.30301-6.2146,68.00945,.42355,68.86346-3.14656"
              fill="#2f2e41"
            />
            <polygon
              points="597.78694 181.75476 644.29875 251.13271 510.78694 278.13271 519.29088 191.27409 597.78694 181.75476"
              fill="#ffb6b6"
            />
            <polygon
              points="597.78694 181.75476 644.29875 251.13271 510.78694 278.13271 519.29088 191.27409 597.78694 181.75476"
              opacity=".1"
            />
            <polygon
              points="500.78694 233.13271 644.78694 227.13271 708.78694 262.13271 705.78694 487.13271 772.78694 614.13271 434.78694 550.13271 460.78694 454.13271 448.78694 252.13271 500.78694 233.13271"
              fill="#6c63ff"
            />
            <path
              d="M3.87807,670.23562c-4.5973-7.24667-5.14023-16.20053-1.45205-23.95072l54.80692-115.15585c4.0904-8.59445,12.88363-14.14749,22.40161-14.14749H771.88865c9.25309,0,17.67165,5.09022,21.9693,13.28457l58.74558,111.9822c4.06073,7.74086,3.79329,16.83204-.71458,24.32114-4.50787,7.48825-12.41699,11.97917-21.15724,12.01393l-805.80659,3.17195h-.10087c-8.54232,0-16.36752-4.30104-20.94617-11.51974Z"
              fill="#fff"
            />
            <path
              d="M3.87807,670.23562c-4.5973-7.24667-5.14023-16.20053-1.45205-23.95072l54.80692-115.15585c4.0904-8.59445,12.88363-14.14749,22.40161-14.14749H771.88865c9.25309,0,17.67165,5.09022,21.9693,13.28457l58.74558,111.9822c4.06073,7.74086,3.79329,16.83204-.71458,24.32114-4.50787,7.48825-12.41699,11.97917-21.15724,12.01393l-805.80659,3.17195h-.10087c-8.54232,0-16.36752-4.30104-20.94617-11.51974Zm75.75648-150.65004c-8.51901,0-16.38914,4.9707-20.05019,12.66239L4.77744,647.40382c-3.30122,6.93643-2.81551,14.95023,1.29947,21.4374,4.09845,6.46089,11.10142,10.31012,18.74776,10.31012h.09028l805.80659-3.17195c7.82266-.03052,14.90191-4.05098,18.93637-10.75345,4.03488-6.70247,4.27392-14.84003,.63999-21.76714l-58.74558-111.9839c-3.84712-7.33313-11.38157-11.88932-19.66366-11.88932H79.63456Z"
              fill="#3f3d56"
            />
            <path
              d="M707.43831,637.73232l-285.67432-19.64063c-4.21777-.29004-7.58154-3.13379-8.56934-7.24414-.98828-4.11035,.71582-8.17187,4.34082-10.34668l63.1709-37.90332c1.604-.96289,3.44385-1.43066,5.30908-1.34082l247.10596,11.23242c3.26709,.14746,6.18506,1.93164,7.80566,4.77246,1.62109,2.83984,1.67236,6.25977,.13818,9.14746l-24.60254,46.31152c-1.65137,3.1084-4.88867,5.03418-8.37402,5.03418-.21582,0-.43311-.00781-.65039-.02246Z"
              fill="#3f3d56"
            />
            <polygon
              points="419.28694 606.63271 703.78694 626.13271 726.28694 577.63271 482.34011 568.06586 419.28694 606.63271"
              fill="#fff"
            />
            <circle cx="559.28673" cy="119.63292" r="85.492" fill="#ffb6b6" />
            <path
              d="M586.82325,125.16526c-.12527,.02138-.31293,.05318-.54042,.09083-4.45166,.73689-31.36603,4.88942-58.50119-5.44719-11.49536-4.37895-7.57399-5.47034-33.17593-20.69436-30.0155-17.84848-37.71851-17.72375-39.95371-26.04619-4.46318-16.61855,19.36904-42.74324,35.1434-41.02317,4.15301,.45287,8.60071,2.92883,15.5185,1.24997,1.51988-.36885,8.17314-1.9835,11.41664-7.49075,2.89343-4.91287,.44277-8.45685,1.60645-12.4861,3.0544-10.57625,28.51545-15.85436,50.83788-12.12509,12.83894,2.14495,22.82514,8.00077,42.27314,19.62489,33.85001,20.23208,50.77483,30.34814,54.57873,45.84706,3.60544,14.69016-5.04806,21.02,1.24544,36.74533,5.86013,14.64221,15.16756,13.66425,18.3704,25.50919,5.15408,19.06075-13.97551,39.98007-21.94432,48.69443-8.73679,9.55424-17.0924,14.79793-28.18511,21.75929-13.92329,8.73773-20.88475,13.10657-29.25457,12.66208-15.17489-.8059-30.26834-14.55799-30.8565-27.11565-.22038-4.70619,1.74286-6.11756,6.6018-22.29628,2.02428-6.74043,3.42836-12.30488,4.28237-15.87499"
              fill="#2f2e41"
            />
            <path
              d="M645.41959,583.2104c5.50003,.21726,9.68589,5.14529,9.98928,10.48468,.31488,5.54157-3.53842,10.64665-8.16742,13.28505-5.42291,3.09089-12.19159,3.58698-18.29762,3.05498-5.49247-.47854-11.46812-2.18688-15.00251-6.72213-2.97377-3.81586-4.06791-9.58168-1.53863-13.9134,2.50773-4.29481,7.84087-5.48065,12.30179-3.75718,4.72107,1.82398,7.68934,6.11767,7.71913,11.19132,.03302,5.62445-3.21504,10.82107-7.77322,13.931-4.91604,3.35409-11.10393,4.43263-16.95564,4.41917-6.37609-.01467-12.72435-1.35296-18.59021-3.83795-5.49552-2.3281-10.98629-5.68546-14.91567-10.24739-3.68384-4.27686-5.88933-10.21096-3.8442-15.75829,1.67722-4.54939,5.9143-7.33835,10.76682-6.95311,4.44278,.35271,8.93644,2.93062,10.9084,7.03582,2.22478,4.63152,1.22563,10.18829-1.60575,14.32916-3.26917,4.78113-8.43689,7.46782-14.17545,7.85617-6.1074,.41331-12.1558-1.75737-17.17993-5.11225-4.65201-3.1064-8.74054-7.08317-13.73537-9.66757-2.40361-1.24366-5.01937-2.03449-7.74067-2.03105-3.46544,.00439-6.79714,1.14219-10.167,1.80261-2.85638,.55979-5.80046,.88592-8.61917-.02696-2.41214-.7812-4.66946-2.21278-6.18878-4.2657-1.43732-1.94212-1.94177-4.37513-1.12762-6.68087,.63847-1.80817,3.53799-1.0296,2.89284,.79752-1.48874,4.2162,3.61841,7.31435,7.19344,7.70119,2.71215,.29347,5.51033-.49026,8.12697-1.1023,2.72701-.63785,5.51542-1.29029,8.33496-1.22094,9.98914,.2457,16.59259,8.78454,24.64657,13.41711,8.46766,4.87051,20.86762,5.2101,26.05295-4.46846,1.88335-3.51533,2.27214-8.18796-.31504-11.47225-2.15531-2.73607-5.98422-4.37304-9.45465-3.84277-4.35815,.6659-6.52894,4.81683-6.37058,8.94354,.1938,5.05046,3.71385,9.15372,7.46808,12.1786,8.35684,6.73331,19.43858,10.16316,30.12733,9.56115,5.01484-.28244,10.34459-1.5882,14.24037-4.92709,3.36601-2.88485,5.66353-7.57647,4.85472-12.07045-.69999-3.88933-3.96151-6.83934-7.90315-7.23086-4.03163-.40046-7.18232,2.4619-7.36226,6.48916-.20239,4.52988,2.48912,8.31076,6.38898,10.37362,4.41801,2.33694,9.77179,2.62664,14.66749,2.37198,5.19776-.27037,10.61459-1.64031,14.25182-5.59833,3.10275-3.3764,4.27897-8.3855,1.41996-12.29206-1.26189-1.72425-3.15977-2.93907-5.32133-3.02446-1.92407-.076-1.93383-3.07639,0-3h0Z"
              fill="#6c63ff"
            />
            <path
              d="M508.69182,579.99657l1.52937-9.45755,84.874-162.21922c1.4057-2.68671,4.7363-3.72925,7.42301-2.32355,2.68714,1.40593,3.72925,4.7363,2.32355,7.42301l-84.83643,162.1474-6.9356,6.72045c-.82045,.79082-2.00383,.96081-3.01405,.43225-1.00979-.52833-1.54487-1.59742-1.36386-2.7228Z"
              fill="#3f3d56"
            />
            <path
              d="M566.54507,476.78954c9.57552,1.80268,18.58002,5.87235,26.26015,11.86853l.43221,.09321,.08732-.43044,92.5018,14.48851-6.70141-123.03589,70.10474-38.39695-16.57008,207.97273c-3.58858,13.28197-17.37253,21.03901-30.58828,17.2138l-117.75084-33.86962,.29404-1.44899-.41161-.11083c-9.41061,2.53809-19.29222,2.78507-28.81774,.72023-23.89682-4.83605-40.77191-21.08616-37.69175-36.29379,3.08013-15.20752,24.94674-23.61153,48.85145-18.77051Z"
              fill="#ffb6b6"
            />
            <path
              d="M629.78694,284.13271l79-22s41.5,30.5,46.5,63.5c.59466,3.92476,2.24425,186.74591,.5,191.5-12.9217,35.21903-84-21-84-21l-42-212Z"
              fill="#6c63ff"
            />
            <path
              d="M287.12239,612.72158l-8.18994-7.01953h-.00049c-1.21924-1.0459-2.70166-1.73828-4.28711-2.00293l-182.48291-30.41406c-4.16504-.69434-7.2417-3.70215-8.02979-7.85059-.7876-4.14844,.97217-8.0752,4.59326-10.24805l65.10156-39.06055c2.17578-1.30566,4.73633-1.7168,7.21338-1.15723l231.37354,52.27344c4.49805,1.01563,7.5,4.65039,7.64746,9.25977s-2.61621,8.42871-7.04102,9.73047l-96.74072,28.45312c-.91797,.27051-1.854,.40234-2.78223,.40234-2.30908,0-4.56885-.81738-6.375-2.36621Z"
              fill="#3f3d56"
            />
            <path
              d="M199.24265,385.8823c9.04537,3.62236,17.09164,9.35828,23.46563,16.72787l.40598,.17512,.16901-.40539,87.94686,32.12243,93.90282-152.04197,51.91219,32.17336-108.87774,174.59479c-6.09203,12.33596-21.11694,17.27772-33.34212,10.96636l-108.96609-56.025,.56899-1.36465-.38237-.18842c-9.72393,.66821-19.46642-1.00253-28.41198-4.87241-22.50848-9.3709-35.91835-28.58053-29.95231-42.90414,5.96598-14.32351,29.04589-18.33523,51.56115-8.95792Z"
              fill="#ffb6b6"
            />
            <path
              d="M505.86641,309.90886l-41.53395-62.10999s-49.42467,9.78272-69.78432,36.2305c-2.54495,3.30597-89.96333,130.0895-90.52652,135.62245-3.94234,38.7307,96.52917,56.87811,96.52917,56.87811l105.31562-166.62107Z"
              fill="#6c63ff"
            />
            <path
              d="M282.60237,614.58779l-209.18164-28.91211c-7.00098-.9668-12.7793-5.9834-14.72168-12.7793L10.6556,404.74404c-1.62793-5.69922-.4126-11.60059,3.33447-16.19238s9.2832-6.96484,15.19482-6.51367l210.75049,16.14648c7.62451,.58398,14.0249,5.95313,15.92773,13.35938l46.47412,180.91797c1.48291,5.77344,0,11.87598-3.96777,16.32422-3.4165,3.83105-8.26123,5.9707-13.31152,5.9707-.81445,0-1.63525-.05566-2.45557-.16895Z"
              fill="#3f3d56"
            />
            <path
              d="M235.97555,270.16555c1.22266,1.34497,5.65967-.02539,14.48413-2.82062,6.70776-2.12482,7.74097-2.89801,8.37891-3.45233,2.24316-1.94897,2.83105-3.99841,5.05298-13.05225,3.98779-16.25031,4.11108-17.86407,6.15894-21.31244,.70508-1.1875,2.48633-4.02008,2.052-4.37109-.44629-.36078-2.37402,2.59009-5.93677,3.70502-3.47241,1.08661-5.0354-.65405-7.99976-.21075-3.83203,.57306-6.1106,4.21313-9.68457,10.10486-3.16479,5.21765-3.56299,7.31671-8.00024,17.68365-1.25708,2.93671-2.26929,5.20978-3.04639,7.00616-8.71191,8.1311-17.35229,16.36945-25.91431,24.67938,.16504-.25244,.32031-.49048,.45508-.69739,3.79248-5.823,4.30786-8.9447,4.25293-11.28387-.08911-3.78973-1.89917-6.67615-5.51538-12.29468-3.5437-5.50574-6.90137-9.13861-10.94678-13.47375-5.30298-5.68243-7.95435-8.52386-9.01025-8.33691-7.54175,1.33466-9.55859,52.68732-.06958,61.87128-1.33179,.95154-2.43481,1.94818-3.23242,2.92853-8.1228-9.01862-22.0376-19.09454-37.45215-20.33508-9.50293-.76495-14.7478,2.21722-16.37866,3.24158-7.5376,4.73419-12.01953,14.20996-9.76855,16.88367,2.09888,2.49329,8.16089-3.1748,20.04175-2.86261,8.29004,.2179,14.76562,3.2254,18.61011,5.01099,8.0647,3.74561,11.0144,7.42786,16.96045,9.95062-2.78735,2.29694-4.99585,5.16351-6.38257,7.83746-.48047,.495-.95898,.9928-1.43896,1.48853-6.13525-3.45746-13.04419-5.99377-20.28613-6.5766-9.50317-.76489-14.74805,2.21722-16.37891,3.24164-5.08008,3.1908-8.76147,8.52966-9.9397,12.49396-.77002,.15485-1.48267,.33142-2.13501,.52203-2.30298-5.20441-9.15625-10.69293-15.52856-13.45898-10.96899-4.76129-25.21753-3.49933-26.74219,1.02856-.04858,.14417-.06079,.2865-.08228,.4292,1.20239-9.70154,2.83496-19.33533,4.87476-28.89899,.06909,.27271,.15601,.54907,.27173,.83972,2.70776,6.80096,10.02466,13.32867,19.99829,16.71515,7.82788,2.65784,11.10669,1.28033,11.93945,.89545,.79565-.36774,4.23218-1.84271,5.07422-4.77576,1.56104-5.43781-7.99878-21.50867-14.02881-16.11816-19.37427,17.31927-22.03296,3.2951-22.92285,.93451,1.64722-7.56091,3.54321-15.07867,5.66968-22.55341,.03662,.04565,.06836,.09058,.10645,.13666,4.23291,5.13354,12.37891,8.75018,21.95166,8.90997,7.51318,.12537,9.96802-1.97772,10.58203-2.54224,.58618-.53931,3.15063-2.77063,3.06445-5.54303-.15967-5.13989-9.30347-9.32605-16.61938-10.05188-6.7417-.66888-14.00122,1.3952-17.60229,4.00897,1.67432-5.5976,3.47534-11.1709,5.39648-16.72003,4.92017,2.00964,11.88965,1.73938,18.73633-1.32117,5.64624-2.5238,6.74414-4.9472,7.00513-5.58203,.24927-.60638,1.38428-3.16364,.35425-5.20087-1.90967-3.7771-10.18628-3.7132-15.89453-1.70581-2.35107,.82684-4.58545,2.09875-6.50049,3.53674,3.40454-9.09534,7.11572-18.12585,11.10693-27.08972l-4-1c-5.09863,11.45087-9.54395,23.05096-13.36426,34.77948-.4751-3.4397-1.66553-7.10413-3.23291-10.08124-4.60889-8.75372-14.45312-15.32111-17.78223-13.19031-.66602,.42621-.94629,1.12036-1.19971,1.94678-2.04077,6.65015-.50391,15.84052,4.87061,24.2843,4.21802,6.6272,7.4668,7.55756,8.31299,7.76794,.7146,.17773,3.47314,.93933,5.74048-.04175-1.5249,5.2251-2.93481,10.47284-4.22046,15.74396-1.54712-3.84119-4.59595-7.9339-7.82031-10.7641-7.4353-6.52594-18.97754-9.13739-21.32422-5.95673-.46924,.63617-.48267,1.3847-.42383,2.24719,.47314,6.94006,5.1958,14.97253,13.23486,20.93524,6.30981,4.67981,9.67627,4.38647,10.54175,4.28027,.50952-.0625,2.04907-.21582,3.53345-.88696-1.37793,6.40466-2.58228,12.84039-3.62329,19.30316-2.08203-7.2298-9.15454-16.24927-15.82935-13.37982-11.84448,5.09186-25.76758-2.72955-27.30005,.69067-.39868,.88995-.0686,1.8075,.31299,2.80322,3.0686,8.01245,11.5437,15.77582,23.18066,19.89844,9.1333,3.23566,12.99731,1.67175,13.97925,1.23346,.65088-.29053,2.79858-1.18787,4.39844-2.85284-1.15015,8.30432-2.03174,16.65106-2.65259,25.034-2.46948-5.39191-9.42529-11.07251-15.93701-14.0014-11.42236-5.13751-26.36182-4.01208-28.021,.70892-.33179,.94427-.07007,1.85522,.32129,2.87726,3.1499,8.224,11.84839,16.19226,23.79272,20.42371,9.37451,3.32111,13.34033,1.71594,14.34839,1.26605,.73633-.32861,3.33716-1.41528,4.99561-3.47864-.2124,3.87549-.37646,7.75732-.48022,11.64655-.02954,1.10785-.04688,2.21552-.06836,3.32324-.13452,.21765-.25195,.44019-.33008,.67291-.32007,.95032-.10229,1.86444,.27344,2.86316-.0083,.70355-.0127,1.40692-.01733,2.11035-2.08984-1.89435-4.58276-4.74274-7.5813-8.80164-2.70557-3.66235-5.2749-.9751-6.92529,2.14319-2.5874-.57635-5.05542-.2196-6.99634,1.59351-13.01587,12.159-27.6145,5.70819-27.82104,9.33344-.05957,1.04608,.50073,1.87799,1.20703,2.78021,5.68311,7.25995,16.83984,12.55627,30.09424,13.11444,10.40259,.43805,13.87695-2.38879,14.74707-3.14911,.30566-.26709,.99072-.84387,1.73267-1.65485,.5957,.47589,1.17554,.90735,1.75708,1.30115,.22876,6.96008,.63818,13.91217,1.24512,20.85156-.49341,.04419-.96533,.12531-1.31689,.16113-5.03882,.51349-6.73657-6.28485-14.34839-8.76849-2.52783-.82477-7.39771-1.72491-9.96411,0-.36963,.24847-1.63062,1.18256-3.58716,1.99286-1.15649,.47906-2.04004,.70111-2.39136,.79712-3.12305,.85419-6.01562,3.19812-7.97119,4.78278-3.67627,2.97888-5.51416,4.46832-6.3772,7.17419-.27148,.85156-1.0354,3.24689,0,5.5799,.48926,1.10242,1.62476,2.74219,5.97852,4.38422,2.58765,.97601,10.13501,3.82257,19.1311,.79718,2.04858-.6889,.48486-.44226,8.36987-4.38422,6.20361-3.10144,9.83179-4.58398,10.36279-7.57275,.18677-1.05072-.00146-2.33203,.79712-2.78998,.44385-.25446,.98047-.1308,1.51611,.06213,.52197,5.5788,1.17383,11.14868,1.96387,16.70734h-7.09863c-9.42578,0-17.88184,5.24609-22.06738,13.69141l-26.55237,53.56787c-1.67627,3.38086-2.5625,7.16309-2.5625,10.9375v137.74316c0,13.58105,11.04895,24.62988,24.63,24.62988h61.97705c13.58105,0,24.62988-11.04883,24.62988-24.62988v-126.83496c0-3.0918-.57275-6.11914-1.70264-8.99805l-25.30566-64.47559c-3.06934-7.81934-9.7168-13.35071-17.66309-15.06335,2.54883-3.02167,5.10156-6.04028,7.67432-9.04999,3.23926,1.56299,6.80273,2.84607,10.63403,3.74677,10.13574,2.38275,14.07886,.25824,15.07642-.32526,.95264-.5575,5.08203-2.8233,5.78198-6.60242,.07495-.40485,.104-.81464,.09863-1.22729,10.38232,8.43982,15.7981,12.59979,19.75513,11.21271,3.40186-1.19244,5.34399-5.1004,6.45605-8.60718,1.16138,.16119,2.39307,.32642,3.70581,.50171,14.21948,1.89862,21.38501,2.77924,24.12598-.58881,3.79346-4.66107,.19287-13.64899-.79956-16.12604-2.15698-5.38403-5.4751-8.65979-7.53638-10.65265-2.67651-2.58801-10.30518-9.96387-22.31519-10.94775-2.61084-.21393-4.9563-.04974-7.3457,.45026-.83252-.76154-1.71118-1.50775-2.67871-2.21643-1.84351-1.35052-3.66406-2.35083-5.62354-3.13226,3.00586-3.2934,6.02002-6.57623,9.04834-9.84564,.47949,.21802,.93457,.42865,1.35278,.62292,9.9209,4.60773,12.10059,9.11981,21.64136,11.49512,4.32861,1.07758,9.229,2.29767,10.44189,.46344,2.15527-3.25848-6.99268-16.66602-21.12891-25.73755,.95312-1.00916,1.90869-2.01508,2.86401-3.02155,1.29272,.54193,2.43164,1.07056,3.4021,1.52124,9.9209,4.60779,12.10059,9.11981,21.6416,11.49512,4.32812,1.07758,9.22852,2.29767,10.44189,.46344,1.92285-2.90747-5.15283-13.89789-16.74072-22.677,3.18311-1.0108,7.40381-2.13104,12.86938-1.98743,8.29004,.2179,14.76562,3.2254,18.61011,5.01099,9.9209,4.60773,12.10059,9.11981,21.64136,11.49512,4.32837,1.07758,9.22876,2.29761,10.44189,.46338,3.20386-4.84436-18.55713-32.13715-44.58789-34.23212-2.02051-.16266-3.83691-.14886-5.47876-.02753-.22681-.37592-.47314-.76184-.73267-1.15436,8.80737,.28308,26.00781-2.23499,40.64795,8.04358,4.22144,2.96375,12.42212,9.93555,26.14648,15.66357,4.38647,1.83081,6.59229,2.73096,7.19971,1.97913,2.17456-2.69092-15.90698-24.83765-41.3457-35.74786-10.08594-4.32562-16.31763-4.73492-20.75-4.07965,.68311-.77881,1.34888-1.58258,1.98975-2.38983,9.90552-9.71509,19.93604-19.32855,30.05664-28.81268-.48999,1.51489-.47363,2.32117,.06079,2.90918Zm-127.11743,120.91547c-11.18823-3.62207-24.73608-1.67609-28.2688,2.44482-.49805-3.6524-.93091-7.31006-1.2876-10.97485,5.09717,2.84668,10.41577,3.60913,20.50488,4.95618,4.29712,.57379,7.93994,1.05145,11.02124,1.3501,.41382,1.12177,.85522,2.13123,1.36743,3.09698,.05933,.11218,.12305,.21881,.18359,.32935l-.08936,.10187c-1.14893-.49817-2.30005-.93817-3.4314-1.30444Zm-29.72583-49.06946c.31909-1.05865,.32568-2.18616,.08203-3.34827,.34814-4.21057,.78271-8.40814,1.29688-12.59308-.01318,.64056,.18994,1.28174,.4668,1.97662,3.11035,7.81177,11.51465,15.30969,22.9707,19.19946,2.13696,.72565,3.97021,1.18317,5.54932,1.46265-.69482,1.21057-1.22705,2.39026-1.57983,3.48151-3.90552-3.13757-8.93286-5.41907-14.63696-2.99854-1.55225,.65869-2.47363,3.06836-3.27393,5.94989-5.26953,.09088-9.67285,1.19043-11.77002,3.05048,.01123-.77588,.00732-1.55005,.02808-2.32709,.11816-4.42889,.33643-8.84338,.64404-13.24432,.08398-.19708,.15967-.39954,.2229-.60931Zm-.88013,22.78009c.22705,.46503,.47583,.9278,.73413,1.38904-.23438-.17261-.47437-.35828-.7207-.55927-.00659-.27637-.0083-.55328-.01343-.82977Zm8.99707,56.6853c-.61353-.08081-1.23267-.1391-1.85767-.17438-1.44238-7.16107-2.77441-14.31738-3.88916-21.48724,2.93164,4.65265,7.71655,8.91241,13.81152,12.14246-2.70459,3.16528-5.38672,6.34076-8.0647,9.51917Zm47.22192-53.85864c-3.81543-1.22534-8.29272-1.81195-14.48926-2.53149-1.57031-2.18262-3.18896-3.79041-4.3855-4.94714-.64819-.62665-1.64307-1.86963-2.93213-3.32385,3.34009-1.07196,8.32495-2.98206,15.3689-2.79694,6.40186,.16827,11.71484,1.99896,15.57617,3.64691-3.05859,3.30457-6.10205,6.62366-9.13818,9.95251Zm21.62378-23.30524c-3.74927-2.26562-7.81543-4.20551-12.09595-5.56879,.41602-.00378,.82324-.01605,1.25464-.0047,5.30835,.13953,9.86743,1.42316,13.47314,2.79694-.87744,.92529-1.7561,1.84906-2.63184,2.77655Z"
              fill="#ccc"
            />
          </svg>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
