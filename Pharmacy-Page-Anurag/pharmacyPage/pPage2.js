var leftDiv = document.getElementById("leftCat");
    leftDiv.addEventListener("click", left);

    var rightDiv = document.getElementById("rightCat");
    rightDiv.addEventListener("click", right);

    var divHeight = document.getElementById("catMainDiv");

    var leftTriangle = document.getElementById("leftTri");
    var rightTriangle = document.getElementById("rightTri");

    var headder = document.getElementById("heading");

    var left = 1;

    var mainDivList = document.getElementById("mainList");

    var leftClick = `<div class="column">
          <ul class="a2Ul">
            <li>
                <p>Gastrointestinal & Hepatobiliary System</p>
                <br>
                <a href="">Antacids, Antirefulx Agents & Anticulerants</a> &nbsp / &nbsp
                 
                <a href="">GIT Regulators & Anti-inflammatories</a> &nbsp/ &nbsp
                <a href="">Antispasmodics</a> &nbsp/ &nbsp
                <a href="">Antidiarrheals</a> &nbsp/&nbsp 
                <a href="">Laxatives, Purgatives</a> &nbsp/&nbsp 
                <a href="">Digestives And Antiflaulents</a> &nbsp/ &nbsp
                <a href="">Cholagogues, Choleltholytics & Hepatic Protectors</a> &nbsp/&nbsp 
                <a href="">Anorectal Preprations</a> &nbsp/&nbsp 
                <a href="">Other Gastrointestinal Drugs</a>
            </li>
            <li>
                <p>Cardiovascular & Hematopoietic system</p>
                <br>
                <a href="">Cardiac Drugs</a> &nbsp/&nbsp 
                <a href="">Anti-Anginal Drugs</a> &nbsp/ &nbsp
                <a href="">ACE inhibitors Dirct Renin inhibitors</a> &nbsp/ &nbsp
                <a href="">Beta-Blockers</a> &nbsp/ &nbsp
                <a href="">Calcium Antagonists</a> &nbsp/&nbsp 
                <a href="">Angiotensis II Antagonists</a> &nbsp/&nbsp 
                <a href="">Other Antihypertensive</a> &nbsp/ &nbsp
                <a href="">Diuretics</a> &nbsp/ &nbsp
                <a href="">Antidiuretics</a> &nbsp/ &nbsp
                <a href="">Peripheral Vasodilators & Cerebral Activators</a> &nbsp / &nbsp
                <a href="">Vasoconstrictors</a> &nbsp/ &nbsp
                <a href="">Dyslipidaemic Agents</a> &nbsp/&nbsp 
                <a href="">Haemostatics</a> &nbsp/ &nbsp
                <a href="">Fibrinolytics & Thrombolytics</a> &nbsp/&nbsp 
                <a href="">Fibrinolytics & Thrombolytics</a> &nbsp/&nbsp 
                <a href="">Phlebitis & Varicose Preparations</a> &nbsp/&nbsp 
                <a href="">Haemorrheologicals</a> &nbsp/&nbsp 
                <a href="">Haemotopoietic Agents</a> &nbsp/&nbsp 
                <a href="">Other Cardiovascular Drugs</a>       </li>
            <li>
                <p>Respiratory System</p>
                <br>
                <a href="">Respiratory Stimulants</a> &nbsp/&nbsp 
                <a href="">Antiasthmatics & COPD Preparations</a> &nbsp/&nbsp 
                <a href="">Cough & Cold Preparations</a> &nbsp/&nbsp 
                <a href="">Nasal Decongestants & Other Nasal Preparations</a> &nbsp/&nbsp 
                <a href="">other Drugs Acting on the Respiratory System</a>
            </li>
            <li>
              <p>Central Nervous System</p>
                <br>
                <a href="">Anxiolytics</a> &nbsp/&nbsp 
                <a href="">Hypnotics & Sedatives</a> &nbsp/&nbsp 
                <a href="">Antidepressants</a> &nbsp/&nbsp 
                <a href="">Antipsychotics</a> &nbsp/&nbsp 
                <a href="">Anticonvlsants</a> &nbsp/&nbsp 
                <a href="">Other CNS Drugs & Agents for ADHD</a> &nbsp/&nbsp 
                <a href="">neurodegenerative Disease Drugs</a> &nbsp/&nbsp 
                <a href="">Antiparkinosnian Drugs</a> &nbsp/&nbsp 
                <a href="">Antivertigo Drugs</a> &nbsp/&nbsp 
                <a href="">Opioid Analgesics</a> &nbsp/&nbsp 
                <a href="">Non-Opioid Analgesics & Antipyretics</a> &nbsp/&nbsp 
                <a href="">Drugs For Neuropathic Pain</a> &nbsp/&nbsp 
                <a href="">Antimigraine Preparations</a> &nbsp/&nbsp 
                <a href="">Nootropics & Neurotonics</a> &nbsp/&nbsp 
                <a href="">Neurotrophics</a>
            </li>
            
        </ul>
        </div>
        <div class="column">
          <ul class="a2Ul">
            <li>
              <p>Musculo-Skeletal System</p>
              <br>
              <a href="">Disease-Modifying Anti-Rheumatic Drugs (DRARDs)</a> &nbsp/&nbsp
              <a href="">NonSteroidal Anti-inflammatory Drugs(NSAIDs)</a> &nbsp/&nbsp 
              <a href="">Hypercuicemia & Gout Preparations</a> &nbsp/&nbsp 
              <a href="">Muscule Relaxants</a> &nbsp/&nbsp 
              <a href="">Anti-Inflammatory Enzymes</a> &nbsp/&nbsp 
              <a href="">Neuromuscular Disorder Drugs</a> &nbsp/&nbsp 
              <a href="">Other Drugs Acting on Mucculo-Skeletal System</a>
          </li>
          <li>
              <p>Hormones</p>
              <br>
              <a href="">Androgens & Rlated Synthetic Drugs</a> &nbsp/&nbsp 
              <a href="">Oestrogens & Progesterones & Related Synthetic Drugs</a> &nbsp/&nbsp 
              <a href="">Combined Sex Harmones</a> &nbsp/&nbsp 
              <a href="">Trophic Harmones & Related Sythetic Drugs</a> &nbsp/&nbsp 
              <a href="">Corticosteroid Harmones</a> &nbsp/&nbsp 
              <a href="">Anabolic Agents</a> &nbsp/&nbsp 
              <a href="">Other Drugs Affecting Harmonal Regulation</a>
          </li>
          <li>
              <p>Contraceptive Agents</p>
              <br>
              <a href="">Oral Contraceptives</a> &nbsp/&nbsp 
              <a href="">Depot Contraceptives</a> &nbsp/&nbsp 
              <a href="">Other Contraceptives</a> &nbsp/&nbsp 
          </li>
          <li>
              <p>Infectious Disease Drugs</p>
              <br>
              <a href="">Aminoglycosides</a> &nbsp/&nbsp 
              <a href="">Cephalosporines</a> &nbsp/&nbsp 
              <a href="">Penicilins</a> &nbsp/&nbsp 
              <a href="">Other Beta-Lactams</a> &nbsp/&nbsp 
              <a href="">Chloraphenicols</a> &nbsp/&nbsp 
              <a href="">Macrolides</a> &nbsp/&nbsp 
              <a href="">Quinolones</a> &nbsp/&nbsp 
              <a href="">Tetracyclines</a> &nbsp/&nbsp 
              <a href="">Sulphonamides</a> &nbsp/&nbsp 
              <a href="">Antibacterial Combinations</a> &nbsp/&nbsp 
              <a href="">Other Antibiotics</a> &nbsp/&nbsp 
              <a href="">Anti-TB Agents</a> &nbsp/&nbsp 
              <a href="">Antileprotics</a> &nbsp/&nbsp 
              <a href="">Antifungals</a> &nbsp/&nbsp 
              <a href="">Antivirals</a> &nbsp/&nbsp 
              <a href="">Anthelmintics</a> &nbsp/&nbsp 
              <a href="">Antimalarials</a> &nbsp/&nbsp 
              <a href="">Antiamoebics</a> &nbsp/&nbsp 
              <a href="">Other Antiprotozoal Agents</a>
          </li>
          <li>
              <p>Oncology</p>
              <br>
              <a href="">Cytotoxic Chemotherapy </a> &nbsp/&nbsp 
              <a href="">Harmonal Chemotherapy</a> &nbsp/&nbsp 
              <a href="">Immunological Chemotherapy</a> &nbsp/&nbsp 
              <a href="">Targeted Cancer Therapy</a> &nbsp/&nbsp 
              <a href="">Supportive Care Therapy</a>
          </li>
          <li>
              <p>Genito - Urinary System</p>
              <br>
              <a href="">Preparations for Vaginal Conditions</a> &nbsp/&nbsp 
              <a href="">Urinary Antiseptics</a> &nbsp/&nbsp 
              <a href="">Drugs Acting on the Uterus</a> &nbsp/&nbsp 
              <a href="">Drugs for Eretile Dysfunction</a> &nbsp/&nbsp 
              <a href="">Drugs for Bladder & Prostate Disorders</a> &nbsp/&nbsp 
              <a href="">Other Dugs Acting on the Genito-Urinary System</a>
          </li>
          <li>
              <p>Endocrine & Metabolic System</p>
              <br>
              <a href="">Insulin Preparations</a> &nbsp/&nbsp 
              <a href="">Antidiabetic Agents</a> &nbsp/&nbsp 
              <a href="">Thyroid Harmones</a> &nbsp/&nbsp 
              <a href="">Antithyroid Agents</a> &nbsp/&nbsp 
              <a href="">Anti-Obesity Agents</a> &nbsp/&nbsp 
              <a href="">Agents Affecting Bone Metabolism</a> &nbsp/&nbsp 
              <a href="">Other Agents Affecting Metabolism</a>
          </li>
          </ul>
        </div>
        <div class="column">
          <ul class="a2Ul">
            <li> 
              <p>Vitamins & Minerals</p>
              <br>
              <a href="">Vitamins</a> &nbsp/&nbsp 
              <a href="">Calcium Preparations</a> &nbsp/&nbsp 
              <a href="">Minerals</a>
          </li>
          <li>
              <p>Nutrition</p>
              <br>
              <a href="">Infant Nutritional products</a> &nbsp/&nbsp 
              <a href="">Enteral</a> &nbsp/&nbsp 
              <a href="">Nutritinal Products</a> &nbsp/&nbsp 
              <a href="">Parenteral Nutritional Products</a> &nbsp/&nbsp 
              <a href="">Electrolytes</a> &nbsp/&nbsp 
              <a href="">Appetite Enhancers</a> &nbsp/&nbsp 
              <a href="">supplements & Adjuvant Therapy</a>
          </li>
          <li>
              <p>Eye</p>
              <br>
              <a href="">Eye Anti-Infectives & Antiseptics</a> &nbsp/&nbsp 
              <a href="">Eye Corticosteroids</a> &nbsp/&nbsp 
              <a href="">Mydriatic Drugs</a> &nbsp/&nbsp 
              <a href="">Miotic Drugs</a> &nbsp/&nbsp 
              <a href="">Antiglaucoma Preprations</a> &nbsp/&nbsp 
              <a href="">Ophthalmic Decongestants, Anaesthetics, Anti-Inglammatories</a> &nbsp/&nbsp 
              <a href="">Ophthalmic Lubrivants</a> &nbsp/&nbsp 
              <a href="">Other Eye Preparations</a>
          </li>
          <li>
              <p>Ear & Mouth / Throat</p>
              <br>
              <a href="">Ear Anti-Infectives & Antiseptics</a> &nbsp/&nbsp 
              <a href="">Ear Corticosteroids</a> &nbsp/&nbsp 
              <a href="">Other Ear Preparations</a> &nbsp/&nbsp 
              <a href="">Mouth/Throat Preparations</a>
          </li>
          <li>
              <p>Dermatologicals</p>
              <br>
              <a href="">Ropical Antibiotics</a> &nbsp/&nbsp 
              <a href="">Topical Antifungals & Antiparasites</a> &nbsp/&nbsp 
              <a href="">Topical Antivirals/a> &nbsp/&nbsp 
              <a href="">Topical Corticosteroids</a> &nbsp/&nbsp 
              <a href="">Topical Antihistamines</a> &nbsp/&nbsp 
              <a href="">Acne Treatments Preparations</a> &nbsp/&nbsp 
              <a href="">Psoriasis, Seborrhea & Ichthyosis Preparations</a> &nbsp/&nbsp 
              <a href="">Keratolytics</a> &nbsp/&nbsp 
              <a href="">Emollients & Skin Protectives</a> &nbsp/&nbsp 
              <a href="">Skin Antiseptics & Disinfectants</a> &nbsp/&nbsp 
              <a href="">Medicated Surgical Dressings</a> &nbsp/&nbsp 
              <a href="">Other Dermatologicals</a>
          </li>
          <li>
              <p>Anaesthetics & Intravenous Solutions</p>
              <br>
              <a href="">Anaesthetics-Local & General</a> &nbsp/&nbsp 
              <a href="">Intravenous & Other sterile Solutions</a>
          </li>
          <li>
              <p>Allergy & Immune System</p>
              <br>
              <a href="">Antihistamines & Antiallergics</a> &nbsp/&nbsp 
              <a href="">Vaccines, Antisera & Immunologicals</a> &nbsp/&nbsp 
              <a href="">Immunosuppressants</a>
          </li>
          <li>
              <p>Antidotes, Detoxifying Agents & Drugs Used in Substance Dependence</p>
              <br>
              <a href="">Antidotes and Detoxifying Agents</a> &nbsp/&nbsp
              <a href="">Drugs used in Substance Dependence</a>
          </li>
          <li>
            <p>Miscellaneous</p>
              <br>
              <a href="">Miscellaneous</a> &nbsp/&nbsp 
              <a href="">Tissue Adhesives</a>
          </li>
          </ul>
        </div>`;

    var rightClick = `<div class="column">
          <ul class="a2Ul">
            <li>
                <p>Anaesthesia</p>
                <br>
                <a href="">Agents</a> &nbsp/&nbsp  
                <a href="">Equipment</a> &nbsp/&nbsp 
                <a href="">Kits</a> &nbsp/&nbsp 
                <a href="">Devices</a>
            </li>
            <li>
                <p>Cardiovascular</p>
                <br>
                <a href="">Cathlab</a> &nbsp/&nbsp 
                <a href="">Defibrillators</a> &nbsp/&nbsp 
                <a href="">Monitors</a> &nbsp/&nbsp 
                <a href="">ECG and Accessores</a> &nbsp/&nbsp 
                <a href="">BP & Pressure Monitoring Devices</a>
            </li>
            <li>
                <p>CSSD</p>
                <br>
                <a href="">Antiseptics</a> &nbsp/&nbsp 
                <a href="">Disinfectants</a> &nbsp/&nbsp 
                <a href="">Sterilization Products</a> &nbsp/&nbsp 
                <a href="">Surgical Wear</a> &nbsp/&nbsp 
                <a href="">Linen</a> &nbsp/&nbsp 
                <a href="">Stationery</a> &nbsp/&nbsp 
                <a href="">Ward Equipment</a> &nbsp/&nbsp 
                <a href="">Miscellaneous Supplies</a>
            </li>
            
        </ul>
        </div>
        <div class="column">
          <ul class="a2Ul">
            <li>
                <p>Cathesters & Tubes</p>
                <br>
                <a href="">Feeding Tubes</a> &nbsp/&nbsp 
                <a href="">Catheters</a> &nbsp/&nbsp 
                <a href="">Drains</a> &nbsp/&nbsp 
                <a href="">Suctions</a> &nbsp/&nbsp 
                <a href="">Accessories</a>
            </li>
            <li>
                <p>IV Needs</p>
                <br>
                <a href="">Cannulas & Infusion Sets</a> &nbsp/&nbsp 
                <a href="">IV Fluids & Infusions</a> &nbsp/&nbsp 
                <a href="">Syringes & Needles</a> &nbsp/&nbsp 
                <a href="">Vaccutainers & Containers</a> &nbsp/&nbsp 
                <a href="">Phlebotomy Aids</a>
            </li>
            <li>
                <p>Mobilization Equipment</p>
                <br>
                <a href="">Trolleys & Wheelchairs</a> &nbsp/&nbsp 
                <a href="">Walkers</a> &nbsp/&nbsp 
                <a href="">Others</a>
            </li>
            <li>
                <p>Orthopaedic</p>
                <br>
                <a href="">Instruments & Accessories</a> &nbsp/&nbsp 
                <a href="">Implants</a> &nbsp/&nbsp 
                <a href="">Casts & Cement</a> &nbsp/&nbsp 
                <a href="">Supports & Braces</a>
            </li>
          </ul>
        </div>
        <div class="column">
          <ul class="a2Ul">
            <li>
                <p>Surgicals</p>
                <br>
                <a href="">Instruments & Accessories</a> &nbsp/&nbsp 
                <a href="">Implants</a> &nbsp/&nbsp 
                <a href="">Sutures & Suture removal</a> &nbsp/&nbsp 
                <a href="">Other Wound Closing Aids</a> &nbsp/&nbsp 
                <a href="">Bandages & Dressings</a> &nbsp/&nbsp 
                <a href="">Miscellaneous OT Supplies</a>
            </li>
            <li>
                <p>Pulmonary/emergency Care</p>
                <br>
                <a href="">Crash Cart Supplies</a> &nbsp/&nbsp 
                <a href="">Oxygen & Administration Products</a> &nbsp/&nbsp 
                <a href="">Nebulizers & Respiratory Devices</a>
            </li>
            <li>
                <p>Diagnostic/Imaging</p>
                <br>
                <a href="">Reagents & Consumables</a> &nbsp/&nbsp 
                <a href="">Instruments & Accessories</a>
            </li>
          </ul>
        </div>`;

    var triangle = document.createElement("div");
    triangle.style.width = "0";
    triangle.style.height = "0";
    triangle.style.borderLeft = "15px solid transparent";
    triangle.style.borderRight = "15px solid transparent";
    triangle.style.borderTop = "20px solid #00cc66";

    leftDiv.style.backgroundColor = "#00cc66";
    rightDiv.style.backgroundColor = "black";
    leftDiv.style.height = "60px";
    rightDiv.style.height = "45px";
    leftDiv.style.verticalAlign = "center";
    // leftDiv.style.padding="2%";
    rightDiv.style.marginTop = "0px";
    leftDiv.style.marginTop = "-15px";
    
    divHeight.style.height = "1512px";
    rightTriangle.innerHTML = "";
    leftTriangle.append(triangle);
    mainDivList.innerHTML = leftClick;
    function left() {
      left = 1;

      leftDiv.style.backgroundColor = "#00cc66";
      rightDiv.style.backgroundColor = "black";
      leftDiv.style.height = "60px";
      rightDiv.style.height = "45px";
      leftDiv.style.verticalAlign = "center";

      rightDiv.style.marginTop = "0px";
      leftDiv.style.marginTop = "-15px";
      divHeight.style.height = "1512px";
      rightTriangle.innerHTML = "";
      leftTriangle.append(triangle);
      headder.textContent = "";
      headder.textContent = "Browse drugs by Therapeutic category";
    //   headder.style.marginBottom="40px"
      mainDivList.innerHTML = "";
      mainDivList.innerHTML = leftClick;
    }
    function right() {
      left = 2;

      rightDiv.style.backgroundColor = "#00cc66";
      leftDiv.style.backgroundColor = "black";
      rightDiv.style.height = "60px";
      leftDiv.style.height = "45px";
      leftDiv.style.marginTop = "0px";
      rightDiv.style.marginTop = "-15px";

      rightDiv.style.verticalAlign = "center";
      divHeight.style.height = "590px";
      mainDivList.innerHTML = "";
      mainDivList.innerHTML = rightClick;
      leftTriangle.innerHTML = "";
      headder.textContent = "";
      headder.textContent = "Browse Surgicals products by category";
      rightTriangle.append(triangle);
    }