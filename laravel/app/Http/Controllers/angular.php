<?php

namespace App\Http\Controllers;
use Spatie\GoogleCalendar\Event;
use Carbon\Carbon;

use Illuminate\Http\Request;
use App\test2;
use App\article;

class angular extends Controller
{

    public function calendartest(Request $request){

        $date = $request->date;
        $email = $request->email;
        $name = $request->name;

        $year = substr($date, 0, 4);
        $month = substr($date, 5, 2);
        $day = substr($date, 8, 2); 
        $start_date = Carbon::create($year, $month, $day, 8 , 00 , 0, 'GMT'); 
        $end_date = Carbon::create($year, $month, $day, 10 , 00 , 0, 'GMT'); 


        $event = new Event;

        $event->name = "Spotkanie z: ".$name;
        $event->startDateTime = $start_date;
        $event->endDateTime = $end_date;
        $event->addAttendee(['email' => $email]);
        $event->addAttendee(['email' => 'mariusztowarek@gmail.com']);


        $event->save();
        return "123";

    }
    public function test()
    {


        $test = test2::orderBy('pkt', 'desc')->get();
        return $test;
    }

    public function add(Request $request)
    {
        test2::create($request->all());

        return $request;
    }

    public function update($id, Request $request)
    {
        // test2::create($request->all());
 
        $post = test2::findOrFail($id);
        $post->update($request->all());
        return $request;  

    }

        public function article()
    {


        $article = article::get();
        return $article;
    }

}
