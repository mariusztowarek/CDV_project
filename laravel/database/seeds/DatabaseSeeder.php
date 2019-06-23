<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);

        $faker = Faker::create('pl_PL');

        $number_of_users = 50;

        for($i = 1; $i <= $number_of_users; $i++)
        {
	        DB::table('test2s')->insert([
	        	'car' => $faker->firstNameMale,
	        	'model' =>$faker->lastName,
	        	'pkt' => $faker->numberBetween(0,40)
	        ]);        	


        }


        for($i = 1; $i <= $number_of_users; $i++)
        {
            DB::table('articles')->insert([
                'auth' => $faker->firstNameMale,
                'articles' =>$faker->text($maxNbChars = 1000),
                'title' =>$faker->text($maxNbChars = 20) 
            ]);         


        }



    }
}
