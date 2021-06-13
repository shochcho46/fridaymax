<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Logdetail extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'ipaddress',
        'browser',
        'device',
        'os',

    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

}
