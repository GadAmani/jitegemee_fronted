<template>
  <!-- Rotating images -->
<v-carousel>
  <v-carousel-item
    src="../../public/images/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="../../public/images/divaris-shirichena-9WEFwuQGiWY-unsplash (1).jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="../../public/images/leiada-krozjhen-FVPt0Tgw7_0-unsplash (1).jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="../../public/images/ron-mcclenny-f61236AEprY-unsplash.jpg"
    cover
  ></v-carousel-item>
</v-carousel>

<!-- Latest from jitegemee -->
 <v-container>
  
  <v-row>
    <v-col cols="12" md="4">
      <v-card
        subtitle="Connect with Top Employers"
        text="The annual Career Fair brings together leading companies and ambitious students for networking, internships, and job opportunities. Don’t miss this chance to meet recruiters, polish your CV, and explore your future career path."
        title="Career Fair 2025"
        color="#E5E5CB"
      ></v-card>

      
    </v-col>

    <v-col cols="12" md="4">
      <v-card color="#E5E5CB">
        <template v-slot:title>
          Cultural Night
        </template>

        <template v-slot:subtitle>
          Celebrating Diversity on Campus
        </template>

        <template v-slot:text>
          Experience an evening of music, dance, fashion, and food from around the world as students showcase their cultures. This vibrant event promotes inclusion and unity, making it one of the most anticipated nights of the semester.        </template>
      </v-card>

      
    </v-col>

    <v-col cols="12" md="4">
      <v-card color="#E5E5CB">
        <v-card-item>
          <v-card-title>Innovation & Research Expo</v-card-title>

          <v-card-subtitle>Discover the Power of Student Ideas</v-card-subtitle>
        </v-card-item>

        <v-card-text>
          This event highlights groundbreaking projects and research led by students and faculty. From tech prototypes to social impact studies, the expo is a platform for creativity, discovery, and real-world problem-solving.
        </v-card-text>
      </v-card>

      
    </v-col>
  </v-row>

 </v-container>
 <!-- Partners -->
<v-container>
  <v-row>
    <v-col cols="12" md="2">
        <v-img src="../../public/logos/BMW_White_Logo.svg.asset.1670245093434.svg"></v-img>
    </v-col>
    <v-col cols="12" md="2">
      <v-img src="../../public/logos/logo_3d_wings_light.png"></v-img>
    </v-col>
    <v-col cols="12" md="2">
        <v-img src="../../public/logos/Range_Rover_Black.svg"></v-img>
    </v-col>
    <v-col cols="12" md="2">
        <v-img src="../../public/logos/safaricom-logo-green.png"></v-img>
    </v-col>
    <v-col cols="12" md="2">
        <v-img src="../../public/logos/cropped-iLab-Logo-Black.png"></v-img>
    </v-col>
    <v-col cols="12" md="2">
        <v-img src="../../public/logos/justice-league-icon-11.jpg"></v-img>
    </v-col>
  </v-row>
</v-container>
</template>