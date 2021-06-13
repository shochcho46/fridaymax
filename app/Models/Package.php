<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Package extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'subscribe_id',
        'amount',
        'payment',
        'tranid',
        'method',
        'tranbankid',

    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function subscribe()
    {
        return $this->belongsTo(Subscribe::class);
    }
}
